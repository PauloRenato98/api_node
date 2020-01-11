const CadastroLogin = require('../model/CadastroLogin');


module.exports = {
    async  store(req, res) {
        const { usuario, password } = req.body;

        const criarcadastro = await CadastroLogin.create({
            usuario: usuario,
            password: password
        })

        return res.json(criarcadastro);
    }
}; 