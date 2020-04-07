const User = require('../models/User');

module.exports = async(req, res) => {

    //const {nome, email, apelido, senha} = req.body;

    const nome = req.body.nome;
    const email = req.body.email;
    const apelido = req.body.apelido;
    const senha = req.body.senha;
    const avatar = req.file.location;
    const key = req.file.key


    const user = await User.create({nome, email, apelido, senha, avatar, key});
    res.redirect('/user/'+`${user.id}`); return;
    /*
    User.create({nome, email, apelido, senha, avatar, key})
        .then(user => function(){
            console.log(user);
            res.redirect('/user/'+`${user.id}`); return;
        })
        .catch(function(error){
            res.status(500).json(error);
        })
    */
};