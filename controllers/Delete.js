const User = require('../models/User');
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: '',
    secretAccessKey: ""
});

module.exports = async(req, res) => {
   
    const id = req.params.id;
    
    const us = await User.findOne({where:{id:id}});

    const s3 = new aws.S3();
    var params = {
        Bucket: 'BUCKET_S3',
        Delete: {
            Objects:[],
            Quiet: false
        }
    };

    const paramsDel = {
        Bucket: 'BUCKET_S3',
        Prefix: `${us.id}/`
    };

    s3.listObjects(paramsDel, function(err, data) {
        if (err) {console.log(err)};
    
        data.Contents.forEach(function(content) {
          //params.Delete.Objects.push({Key: content.Key});
            s3.deleteObject({Bucket: 'BUCKET_S3', Key: content.Key}, function(err, data){
                if(err){console.log(err)}
            });
        });
    });

    s3.deleteObject({Bucket: 'BUCKET_S3', Key: us.key}, function(err, data){
        if(err){console.log(err)}
    });
    
    /*
    s3.deleteObjects(params, function(err, data){
        if(err){console.log(err)}
    });
    */

    User.destroy({where: {id:id}})
    .then(function(){
        res.redirect('/'); return;
    })
    .catch(error => res.status(500).json({message:error}));
};