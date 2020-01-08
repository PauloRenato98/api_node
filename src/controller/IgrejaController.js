const Igreja = require('../model/igreja');


module.exports = {
    async index(req, res) {

        const igrejascadastradas = await Igreja.find();
        return res.json(igrejascadastradas);


    },
    async  store(req, res) {
        const { name, horarios, imagem, password } = req.body;

        const igreja = await Igreja.create({
            name: name,
            horarios: horarios,
            imagem: imagem,
            password: password,
        })

        return res.json(igreja);
    }
};