const mongoose = require('mongoose');


const adminModal = new mongoose.Schema({
    name:{
        tyep:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
    }
})

const adminCollection = mongoose.model("adminModal",adminModal);

module.exports = adminCollection;