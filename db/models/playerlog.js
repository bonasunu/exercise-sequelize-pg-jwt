'use strict'
const { Model } = require('sequelize')
const { now } = require('sequelize/types/lib/utils')
module.exports = (sequelize, DataTypes) => {
  class PlayerLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlayerLog.init(
    {
      username: { type: DataTypes.STRING, allowNull: false },
      level: { type: DataTypes.INTEGER, defaultValue: 0 },
      experience: { type: DataTypes.INTEGER, defaultValue: 0 },
      last_login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      modelName: 'user_game_history',
    }
  )
  return PlayerLog
}
