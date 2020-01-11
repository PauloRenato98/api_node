const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const CadastroLoginSchema = new Schema({

    usuario: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

CadastroLoginSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

module.exports = model('Cadastrologin', CadastroLoginSchema); 