import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_DATABASE!,
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    dialect: 'postgres',
    logging: false,

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },

    pool: {
      max: 3,
      min: 0,
      idle: 10000,
      acquire: 30000,
    },
  }
);

export async function connectDB() {
  await sequelize.authenticate();
  console.log('✅ PostgreSQL conectado');
}

export default sequelize;
