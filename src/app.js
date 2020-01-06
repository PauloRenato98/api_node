const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
require('dotenv').config();

const server = express();


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log('Banco de Dados conectado');
});

//require('./controller/authController')(server);

server.use(express.json());

server.use(routes);


server.listen(process.env.PORT || 3333);

