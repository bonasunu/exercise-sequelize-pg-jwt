'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PlayerBio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models, {
        foreignKey: 'player',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      models.belongsTo(this)
    }
  }
  PlayerBio.init(
    {
      player_id: { type: DataTypes.STRING, allowNull: false },
      first_name: { type: DataTypes.STRING, defaultValue: '' },
      last_name: { type: DataTypes.STRING, defaultValue: '' },
      city: { type: DataTypes.STRING, defaultValue: '' },
    },
    {
      sequelize,
      modelName: 'user_game_biodata',
    }
  )
  PlayerBio.associate(Player)
  return PlayerBio
}
