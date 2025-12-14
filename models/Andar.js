'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Andar extends Model {
    static associate(models) {
      Andar.hasMany(models.Sala, {
        foreignKey: 'id_andar',
        as: 'salas',
      });
    }
  }
  Andar.init({
    id_andar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    numero_andar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Andar',
    tableName: 'Andares',
    underscored: false,
  });
  return Andar;
};