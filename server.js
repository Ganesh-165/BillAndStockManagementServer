const express = require('express');
const connection = require('./database/_connection');
require('dotenv').config();


const PORT = process.env.PORT;
const server = express();

connection();
server.listen(PORT,()=>{
    console.log("Server Started");
});