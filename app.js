const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const methodOverride = require('method-override');

/*
Quando for fazer o deploy via docker-compose caso de erro de ssl, executar comando

export COMPOSE_TLS_VERSION=TLSv1_2

eval permission denied
sudo chown "$USER":"$USER" /home/"$USER"/.docker -R
sudo chmod g+rwx "/home/$USER/.docker" -R

*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.engine('html', require('ejs').renderFile);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', routes);

module.exports = app;