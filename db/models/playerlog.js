'use strict';
const {
  Model
} = require('sequelize');
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
  };
  PlayerLog.init({
    username: DataTypes.STRING,
    level: DataTypes.INTEGER,
    experience: DataTypes.INTEGER,
    last_login: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'PlayerLog',
  });
  return PlayerLog;
};