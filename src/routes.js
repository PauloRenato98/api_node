const server = require('express');
const IgrejaController = require('./controller/IgrejaController');

const routes = server.Router();


routes.post('/cadastroigreja', IgrejaController.store);


routes.get('/testando', (req, res) => {
    res.json({ ok: true });
})


module.exports = routes;