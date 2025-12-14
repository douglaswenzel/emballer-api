import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { Sala } from './Sala';

export interface AndarAttributes {
  id_andar: number;
  numero_andar: number;
}

export interface AndarCreationAttributes extends Optional<AndarAttributes, 'id_andar'> {}

export class Andar extends Model<AndarAttributes, AndarCreationAttributes> implements AndarAttributes {
  public id_andar!: number;
  public numero_andar!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public salas?: Sala[]; 

  static associate(models: any) {
    Andar.hasMany(models.Sala, {
      foreignKey: 'id_andar',
      as: 'salas',
    });
  }
}

export default (sequelize: Sequelize, dataTypes: any) => {
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