require('dotenv').config();

const config = {
  development: { 
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 5,        
      min: 0,        
      acquire: 30000, 
      idle: 10000    
    },
    use_env_variable: 'DATABASE_URL' 
  },
  
  production: {
    use_env_variable: 'DATABASE_URL', 
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false,
    pool: {
      max: 5,        
      min: 0,        
      acquire: 30000, 
      idle: 10000    
    }
  }
};

module.exports = config;