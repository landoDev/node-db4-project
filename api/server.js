const express = require('express');
const cocktailRouter = require('../cocktails/cocktailRouter')
const server = express();

server.use(express.json());

server.use('/api/cocktails', cocktailRouter)

module.exports = server;