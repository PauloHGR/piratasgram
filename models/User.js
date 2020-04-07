/*const mongoose = require('../db/moongose');

const LikeSchema = new mongoose.Schema({
    idPost: Integer,
    like: Integer,
    deslike: Integer,
    
});

module.exports = mongoose.model('User', UserSchema);
*/
const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');


const UserSchema = sequelize.define('customers', {
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    apelido:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    },
    avatar:{
        type: Sequelize.STRING
    },
    key:{
        type: Sequelize.STRING
    }
});

UserSchema.sync();

module.exports = UserSchema;