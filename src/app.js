const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
require('dotenv').config();

const server = express();


mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }, () => {
    console.log('CONECTADO');
});

//require('./controller/authController')(server);

server.use(express.json());

server.use(routes);


server.listen(3333, () => {
    console.log('Api rodando')
});

