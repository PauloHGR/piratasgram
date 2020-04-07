const User = require('../models/User');
const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: '',
    secretAccessKey: ""
});

module.exports = async(req, res) => {

    //const {nome, email, apelido, senha} = req.body;

    const id = req.params.id_user;
    const us = await User.findOne({where:{id:id}});

    const s3 = new aws.S3();
    const params = {
        Bucket: 'BUCKET_S3',
        Key: us.key
    };

    s3.deleteObject(params, function(err, data){
        if(err){console.log(err)}
    });

    const avatar = req.file.location;
    const key = req.file.key

    User.update({avatar, key}, {where: {id:id}})
    .then(function(){
        res.redirect('/user/'+`${id}`);
        return;
    })
    .catch(error => res.status(500).json({error:error}));
};