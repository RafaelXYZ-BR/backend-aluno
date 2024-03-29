//Define que vamos utilizar o Sequelize como ORM
const Sequelize = require('sequelize');

const config  = require('../config/config.js');

//  Para o Sequelize os dados do Banco de Dados
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);
module.exports  = sequelize;