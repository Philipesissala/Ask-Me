const Sequelize = require('sequelize');
const connection = require('../database/database');

const perguntas = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//perguntas.sync({ force: true });


module.exports = perguntas;