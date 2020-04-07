const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const _post = require('../controllers/UpdatePhoto');

routes.post('/:id_user', multer(multerConfig).single('avatar'), _post);

module.exports = routes;