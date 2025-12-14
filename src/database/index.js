require('dotenv').config({ quiet: true });

const { Sequelize } = require('sequelize');

const { DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o Render PostgreSQL estabelecida com sucesso!');
    } catch (error) {
        console.error('❌ ERRO: Não foi possível conectar ao banco de dados PostgreSQL:', error.message);
    }
}

connectDB();

module.exports = sequelize;