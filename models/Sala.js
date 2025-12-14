'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sala extends Model {
    static associate(models) {
      Sala.belongsTo(models.Andar, {
        foreignKey: 'id_andar',
        as: 'andar',
      });
    }
  }
  Sala.init({
    id_sala: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_andar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numero_sala: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    identificacao_completa: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'Sala',
    tableName: 'Salas',
    underscored: false,
  });
  return Sala;
};