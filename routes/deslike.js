const routes = require('express').Router();
const _post = require('../controllers/Deslike');

routes.post('/:id_user/:id_post', _post);

module.exports = routes;