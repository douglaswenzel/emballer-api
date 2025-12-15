import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database';
import fs from 'fs';
import path from 'path';

const basename = path.basename(__filename);

const db: any = {};

fs.readdirSync(__dirname)
  .filter(file =>
    file !== basename &&
    (file.endsWith('.ts') || file.endsWith('.js')) &&
    !file.endsWith('.d.ts')
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
