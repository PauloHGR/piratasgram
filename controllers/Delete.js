const User = require('../models/User');
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: 'AKIA3643YDHW4MUEWY4C',
    secretAccessKey: "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"
});

module.exports = async(req, res) => {
   
    const id = req.params.id;
    
    const us = await User.findOne({where:{id:id}});

    const s3 = new aws.S3();
    var params = {
        Bucket: 'uploads-piratasgramv2',
        Delete: {
            Objects:[],
            Quiet: false
        }
    };

    const paramsDel = {
        Bucket: 'uploads-piratasgramv2',
        Prefix: `${us.id}/`
    };

    s3.listObjects(paramsDel, function(err, data) {
        if (err) {console.log(err)};
    
        data.Contents.forEach(function(content) {
          //params.Delete.Objects.push({Key: content.Key});
            s3.deleteObject({Bucket: 'uploads-piratasgramv2', Key: content.Key}, function(err, data){
                if(err){console.log(err)}
            });
        });
    });

    s3.deleteObject({Bucket: 'uploads-piratasgramv2', Key: us.key}, function(err, data){
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