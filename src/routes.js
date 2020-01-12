const server = require('express');
const IgrejaController = require('./controller/IgrejaController');

const routes = server.Router();


routes.post('/cadastroigreja', IgrejaController.store);


routes.get('/testando', (req, res) => {
    res.json({ ok: true });
})

routes.get('/igrejas', IgrejaController.index);

module.exports = routes;