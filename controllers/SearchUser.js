const User = require('../models/User');
const Post = require('../models/UserPost');
const Sequelize = require('sequelize');

module.exports = async(req, res) => {

    const apelido = req.body.apelido;
    console.log(apelido)

    const user = await User.findOne({where:{apelido:apelido}});

    Post.findAll({where:{userId:user.id}})
    .then(posts => res.render('Busca',{user:user, posts:posts}))
    .catch(error => res.json({error:'Falha no Banco de Dados, recarregue a pagina e tente novamente'}))
}