/*
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://phgr:admin123@piratasgram.cluster-cdvrodzdwd8q.us-east-1.docdb.amazonaws.com:27017/?ssl=true&ssl_ca_certs=rds-combined-ca-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false')
    module.exports = mongoose;
*/

const Sequelize = require('sequelize');

const connection = new Sequelize('dbsgram', 'phgr', 'admin123', {
    host:'dbsgram-instance-1.cdvrodzdwd8q.us-east-1.rds.amazonaws.com',
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
