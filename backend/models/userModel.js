const mongoose = require('mongoose');
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");
// const passportLocalMongoose = require("passport-local-mongoose");
// const passport = require("passport");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

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

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};


const User = mongoose.model("User", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Full Name"),
		email: Joi.string().required().label("Email"),
		phone: Joi.string().email().required().label("Phone"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
