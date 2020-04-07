const user = require('./user');
const routes = require('express').Router();
const User = require('../models/User')

routes.use('/user', user);
routes.get('/', (req, res) => {
    res.render('login',{title:"Piratao",msg:''});
});

routes.post('/', (req, res) => {
    const apelido = req.body.username;
    const senha = req.body.password;

    User.findOne({where:{apelido, senha}})
    .then(user => {
        if (user){res.redirect('/user/'+`${user.id}`); return;}
        res.render('login', {title:"Piratao", msg:"Apelido ou senha incorretos!!"});
    })
    .catch(error => res.render('login', {message:error, title:"Piratao"}));
});

module.exports = routes;