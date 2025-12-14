import 'dotenv/config';
import { Sequelize, Dialect } from 'sequelize';

const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

const dialect: Dialect = 'postgres'; 

const sequelize = new Sequelize(
    DB_DATABASE!, 
    DB_USERNAME!, 
    DB_PASSWORD!, 
    {
        host: DB_HOST!,
        port: parseInt(DB_PORT!),
        dialect: dialect,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        logging: false
    }
);

async function connectDB(): Promise<void> {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o Render PostgreSQL estabelecida com sucesso!');
    } catch (error: any) {
        console.error('❌ ERRO: Não foi possível conectar ao banco de dados PostgreSQL:', error.message);
    }
}

connectDB();

export default sequelize;