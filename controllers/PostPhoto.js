const Post = require('../models/UserPost');
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: 'AKIA3643YDHW4MUEWY4C',
    secretAccessKey: "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"
});

module.exports = async(req, res) => {

    const userId = req.params.id_user;
    const urlPost = req.file.location;
    const keyPost = req.file.key;
    const like = 0;
    const deslike = 0;

    Post.create({userId, urlPost, keyPost, like, deslike})
        .then(function(){
            res.redirect('/user/'+`${userId}`);
            return;
        })
        .catch(function(error){
            res.status(500).json(error);
        })
}