'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}

    static #encrypt = (password) => bcrypt.hashSync(password, 10)
    static register = ({ username, password }) => {
      const passwordHash = this.#encrypt(password)

      return this.create({ username, password: passwordHash })
    }

    checkPassword = (password) => bcrypt.compareSync(password, this.password)

    generateToken = () => {
      const payload = {
        id: this.id,
        username: this.username,
      }

      const secret = process.env.SECRET
      const token = jwt.sign(payload, secret)

      return token
    }

    static authenticate = async ({ username, password }) => {
      try {
        const user = await this.findOne({ where: { username } })
        if (!user) Promise.reject('User does not exist.')
        const passwordCorrect = await user.checkPassword(password)
        if (!passwordCorrect) Promise.reject('Wrong password!')

        return Promise.resolve(user)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    }
  )
  return User
}
