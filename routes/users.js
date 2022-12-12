let express = require('express');
let routes = express.Router();//1

routes.get('/', (req, res) => { //users

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Hcode',
            email: 'contato@hcode.com.br',
            id: 1
        }]
    });

});

routes.get('/admin', (req, res) => {//users/admin

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });

});

module.exports = routes;