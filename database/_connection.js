const mongoose = require('mongoose');
require('dotenv').config();


const URL = process.env.URL;

const connection = ()=> mongoose
  .connect(URL)
  .then((con) => {
    console.log("DataBase Connected");
  })
  .catch((err) => console.log(err));

module.exports = connection;