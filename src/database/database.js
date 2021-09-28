const Sequelize = require('sequelize');

const connection = new Sequelize('perguntasBD', 'root', 'S1ssala23', {
    host: 'localhost',
    dialect: 'mysql'
});

connection.authenticate()
    .then(() => {
        console.log('Database conection success.');
    }).catch((error) => {
        console.log('Error to connect');
    });

module.exports = connection;