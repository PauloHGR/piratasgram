const User = require('../models/User');

module.exports = async(req, res) => {

    const id = req.params.id;

    User.update(req.body, {where: {id:id}})
    .then(function(){
        res.redirect('/user/'+`${id}`);
        return;
    })
    .catch(error => res.status(500).json({error:error}));
};