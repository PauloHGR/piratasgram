/*
    ;
*/

const Sequelize = require('sequelize');

const connection = new Sequelize('BD', 'Usuario', 'senha', {
    host:'HOST',
    dialect:'mysql',
    ssl: true
});

connection.authenticate()
    .then(function(){
        console.log('Mysql has benn connected');
    })
    .catch(function(err){
        console.log('Conection failure'+err);
    })
    .done();

module.exports = connection;
