const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();


const connection = require('./database/_connection');
const router = require('./routes/_mainroute');


const PORT = process.env.PORT;
const server = express();

connection();
server.use(bodyParser.urlencoded({extended:false}),express.json());
server.use(router);
server.listen(PORT,()=>{
    console.log("Server Started");
});