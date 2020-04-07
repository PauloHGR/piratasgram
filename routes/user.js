const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const upFoto = require('./upload_foto');
const posts = require('./posts');
const search = require('./searchUser');
const filter = require('./filter_date');
const like = require('./like');
const deslike = require('./deslike');

routes.use('/upload_foto', upFoto);
routes.use('/posts', posts);
routes.use('/:id/search', search);
routes.use('/filter', filter);
routes.use('/like', like);
routes.use('/deslike', deslike);


const _get = require('../controllers/Get');
const _post = require('../controllers/Post');
const _put = require('../controllers/Update');
const _delete = require('../controllers/Delete');

routes.get('/', (req, res) => {
    res.render('Cadastro');
})

routes.get('/:id', _get);
routes.post('/', multer(multerConfig).single('avatar'), _post);
routes.put('/:id', _put);
routes.delete('/:id', _delete);

module.exports = routes;