const Igreja = require('../model/igreja');


module.exports = {
    async  indexedDB(req, res) {
        const Teste = Igreja.find();

        console.log(Teste);


        return res.json({ ok: true });
    }
};



