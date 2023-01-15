const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
username:{
    type:String
}, 
name:{
    type:String
},
googleId:{
    type:String
},
secret:{
    type:String
}

})

const User = new mongoose.model('User', userSchema)