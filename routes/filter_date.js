const routes = require('express').Router();
const _post = require('../controllers/FilterDate')
routes.post('/', _post);

module.exports = routes;