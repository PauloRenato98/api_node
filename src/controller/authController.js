const express = require('express');
const User = require('../model/CadastroLogin');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { usuario, password } = req.body;

    try {
        if (await User.findOne({ usuario }))
            return res.status(400).send({ erro: "O usuario ja existe" });

        const user = await User.create(req.body);

        user.password = undefined;

        console.log("===============")
        console.log(user.password)


        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: " Falha ao criar o usuario" });
    }
});


module.exports = server => server.use('/auth', router);