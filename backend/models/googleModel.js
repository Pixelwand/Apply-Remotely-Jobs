const mongoose = require('mongoose');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");


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
        type:String,
        require:true
            }
})

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const Profile = mongoose.model("profile", userSchema);

module.exports = Profile