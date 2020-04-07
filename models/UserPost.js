const Sequelize = require('sequelize');
const sequelize = require('../db/sequelize');
const UserSchema = require('./User');


const PostSchema = sequelize.define('posts', {

    urlPost: {
        type: Sequelize.STRING
    },
    keyPost:{
        type: Sequelize.STRING
    },
    like:{
        type: Sequelize.INTEGER
    },

    deslike:{
        type: Sequelize.INTEGER
    },
    userId: {
        type: Sequelize.INTEGER
    }
});

PostSchema.sync();

UserSchema.hasMany(PostSchema, {foreignKey: 'userId'});
PostSchema.belongsTo(UserSchema, {foreignKey: 'userId'});

module.exports = PostSchema;