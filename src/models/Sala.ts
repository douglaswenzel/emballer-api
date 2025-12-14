
import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
import { Andar } from './Andar'; 

export interface SalaAttributes {
  id_sala: number;
  id_andar: number;
  numero_sala: string;
  identificacao_completa: string;
}

export interface SalaCreationAttributes extends Optional<SalaAttributes, 'id_sala'> {}

export class Sala extends Model<SalaAttributes, SalaCreationAttributes> implements SalaAttributes {
  public id_sala!: number;
  public id_andar!: number;
  public numero_sala!: string;
  public identificacao_completa!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public andar?: Andar; 

  static associate(models: any) {
    Sala.belongsTo(models.Andar, {
      foreignKey: 'id_andar',
      as: 'andar',
    });
  }
}

export default (sequelize: Sequelize, dataTypes: any) => {  Sala.init({
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