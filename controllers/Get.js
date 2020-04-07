const User = require('../models/User');
const Post = require('../models/UserPost');

/*
class Get {
    constructor() { }
    getAll(req, res) {
        res.send('rota ok');
    }
}
*/

module.exports = async(req, res) => {

    const id = req.params.id;

    const posts = await Post.findAll({where:{userId:id}});

    const user = await User.findOne({where:{id:id}});

    res.render('Home', {user:user, posts:posts})
    return;
    
    /*
   User.findAll({})
   .then(users => res.json(users))
   .catch(error => res.json({error:error}))
    */
};