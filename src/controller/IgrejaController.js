const Igreja = require('../model/igreja');


module.exports = {
    async  store(req, res) {
        const { name, horarios, imagem, password } = req.body;

        console.log(password);

        const igreja = await Igreja.create({
            name: name,
            horarios: horarios,
            imagem: imagem,
            password: password,
        })

        return res.json(igreja);
    }
};