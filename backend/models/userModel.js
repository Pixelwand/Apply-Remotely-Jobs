const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    password:{
        tyep:String
            }
})

const User = mongoose.model("User", userSchema);
module.exports = User