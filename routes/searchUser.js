const routes = require('express').Router();
const _post = require('../controllers/SearchUser');

routes.post('/', _post);

module.exports = routes;