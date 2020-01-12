const { Schema, model } = require('mongoose');

const bcrypt = require('bcryptjs');

const IgrejaSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    horarios: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },

},
    { timestamps: true, }
);

module.exports = model('Igreja', IgrejaSchema);

