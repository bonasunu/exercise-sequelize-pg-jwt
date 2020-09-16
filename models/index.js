const { Sequelize, DataTypes, Model } = require('sequelize')
const config = require('../utils/config')

const sequelize = new Sequelize(config.DB, config.USER, config.PASS, {
  host: config.HOST,
  dialect: 'postgres',
})

class Player extends Model {}
Player.init(
  {
    player_name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: 'user_game' }
)

class PlayerBio extends Model {}
PlayerBio.init(
  {
    username: { type: DataTypes.STRING, allowNull: false },
    first_name: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
    last_name: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
    city: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
  },
  { sequelize, modelName: 'user_game_biodata' }
)

class PlayerLog extends Model {}
PlayerLog.init(
  {
    player: { type: DataTypes.STRING, allowNull: false },
    level: { type: DataTypes.INTEGER, defaultValue: 1 },
    experience: { type: DataTypes.INTEGER, defaultValue: 0 },
    last_login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'user_game_history' }
)

const syncTable = async () => {
  await sequelize.sync({ force: true })
  const harry = await Player.create({
    player_name: 'harrypotter',
  })
  const harryBio = await PlayerBio.create({
    username: 'harrypotter',
    first_name: 'Harry',
    last_name: 'Potter',
    city: 'London',
  })
  const harryLog = await PlayerLog.create({
    player: 'harrypotter',
  })

  console.log(harry.toJSON())
  console.log(harryBio.toJSON())
  console.log(harryLog.toJSON())
}
syncTable()

module.exports = { Player, PlayerBio, PlayerLog }
