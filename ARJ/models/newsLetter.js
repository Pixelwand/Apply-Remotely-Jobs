const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    email:{
        type:String
    }
})


const email = mongoose.model("emailList", emailSchema);

module.exports = email;