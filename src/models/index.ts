// src/models/index.ts

import { Sequelize, DataTypes, Model } from 'sequelize';
import { Andar } from './Andar';
import { Sala } from './Sala';

import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// IMPORTANTE: O caminho para config.js precisa estar correto
// Assumindo que a pasta config está na RAIZ e index.ts está em src/models
const config = require(__dirname + '/../../config/config.js')[env]; 

interface DB {
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
    Andar: typeof Andar & (new (values?: Andar) => Andar);
    Sala: typeof Sala & (new (values?: Sala) => Sala);
    [key: string]: any;
}

const db: DB = {} as DB;

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as string, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Lógica para carregar dinamicamente todos os models
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.ts' || file.slice(-3) === '.js') && // Agora busca .ts
      file.indexOf('.d.ts') === -1 // Ignora arquivos de definição de tipo
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
    db[model.name] = model;
  });

// Configura associações (relacionamentos)
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Andar = db.Andar as typeof Andar;
db.Sala = db.Sala as typeof Sala;


export default db;