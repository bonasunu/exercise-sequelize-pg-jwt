const { Sequelize, DataTypes, Model } = require('sequelize')
const config = require('../utils/config')

const sequelize = new Sequelize(config.DB, config.USER, config.PASS, {
  host: config.HOST,
  dialect: 'postgres',
})

class Player extends Model {}
Player.init(
  {
    player_name: DataTypes.STRING,
  },
  { sequelize, modelName: 'player' }
)

const syncTable = async () => {
  await sequelize.sync()
  const harry = await Player.create({
    player_name: 'harrypotter',
  })
  console.log(harry.toJSON())
}
syncTable()

module.exports = Player
