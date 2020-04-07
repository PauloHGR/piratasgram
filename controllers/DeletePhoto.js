const Post = require('../models/UserPost');
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: '',
    secretAccessKey: ""
});

module.exports = async(req, res) => {

    const id = req.params.id_post;
    const us = await Post.findOne({where:{id:id}});

    const s3 = new aws.S3();
    const params = {
        Bucket: 'BUCKET_S3',
        Key: us.keyPost
    }

    s3.deleteObject(params, function(err, data){
        if(err){console.log(err)}
    });

    Post.destroy({where: {id:id}})
    .then(function(){
        res.redirect('/user/'+`${req.params.id_user}`);
        return;
    })
    .catch(error => res.status(500).json({message:error}));
}