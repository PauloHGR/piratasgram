const Post = require('../models/UserPost');

module.exports = async(req, res) => {

    const id = req.params.id_post;
    
    Post.findOne({where:{id:id}})
    .then(users => {
        users.increment('like',{by:1});
        return res.redirect('/user/'+`${req.params.id_user}`);
    })
    .catch(error => res.json({error:error}))
}