/*const express = require('express');

const igreja = require('../model/igreja');

const router = express.Router();


router.post('/registro', async (req, res) => {
    try {
        const user = await igreja.create(req.body);
        return res.json(user);
    } catch (err) {
        return res.status(400).send({ erro: 'Falha no Registroas' });
    }
})


module.exports = server => server.use('/registro', router);*/