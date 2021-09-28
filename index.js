const express = require('express');
const nunjucks = require('nunjucks');

const server = express();


const routes = require('./src/router');



server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.set('view engine', 'njk');
server.use(express.static('public'));

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
    autoescape: false
});


server.listen(3333, () => {
    console.log('Server running...')
});