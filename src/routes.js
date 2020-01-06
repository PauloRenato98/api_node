const server = require('express');
const IgrejaController = require('./controller/IgrejaController');

const routes = server.Router();

console.log("routes.post")
routes.post('/cadastroigreja', IgrejaController.store);


routes.get('/testando', (req, res) => {
    res.json({ ok: true });
})


module.exports = routes;