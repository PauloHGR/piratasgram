//const multer = require('multer');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const crypto = require('crypto');

aws.config.update({
    accessKeyId: '',
    secretAccessKey: ""
  });

module.exports = {

/*storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})*/

    storage: multerS3({
        s3: new aws.S3(),
        bucket:'BUCKET_S3',
        contentType: multerS3.AUTO_CONTENT_TYPE, //Para não realizar o download da imagem e sim apenas abrir ela
        acl: 'public-read',
        key: (req, file, cb) => {

            crypto.randomBytes(16, (err, hash) => {
                if(err){cb(err)}
                fileName = `${req.params.id_user}/${hash.toString("hex")}-${file.originalname}`;
                cb(null, fileName);
            })
        }

    })

};