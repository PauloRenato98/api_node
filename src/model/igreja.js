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
    /*usuario: {
        type: String,
        required: true,
    },*/
    password: {
        type: String,
        required: true,
        select: false,
    },
    /* email: {
         type: String,
         required: true,
     },*/
},
    { timestamps: true, }
);

/*IgrejaSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})*/


module.exports = model('Igreja', IgrejaSchema);

