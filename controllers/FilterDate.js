const Post = require('../models/UserPost');
const User = require('../models/User');
Sequelize = require('sequelize');

module.exports = async(req, res) => {

    const Op = Sequelize.Op;

    const date_b = req.body.date_b;
    const date_e = req.body.date_e;
    const id = req.body.id;

    console.log(date_b);
    console.log(date_e);

    if(date_b=='' && date_e==''){
        return res.redirect('/user/'+`${id}`);
    }

    const user = await User.findOne({where:{id:id}});

    Post.findAll({where:{userId:id, createdAt:{[Op.gt]:date_b, [Op.lt]:date_e}}})
    .then(posts => res.render('Home',{user:user, posts:posts}))
    .catch(error => res.json({error:error}));

}