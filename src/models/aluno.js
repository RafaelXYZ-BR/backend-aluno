// Define que estamos utilizando o Sequelize
const Sequelize = require('sequelize');

//Obtém dados de conexão entre o Sequelize e o Bnaco de Dados MySQL
const sequelize = require('../database/database.js');

//Cria a tabela no BD e seus campos
const aluno = sequelize.define("aluno", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    ra: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
    });

    module.exports = aluno;