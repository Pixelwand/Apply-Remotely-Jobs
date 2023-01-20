const User = require('../models/userModel');
// const bcrypt = require("bcrypt");
// const Joi = require("joi");

exports.findUser = (req, res) => {

    const { email, password} = req.body;
     User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}

    // try{
    //     const {error} = validate(req.body);
    //     // if (error)
	// 	// 	return res.status(400).send({ message: error.details[0].message });
    //    const user  = await User.findOne({email:req.body.email});
    //    if (!user)
	// 		return res.status(401).send({ message: "Invalid Email or Password" });

	// 	// const validPassword = await bcrypt.compare(
	// 	// 	req.body.password,
	// 	// 	user.password
	// 	// );
	// 	// if (!validPassword)
	// 	// 	return res.status(401).send({ message: "Invalid Email or Password" });

	// 	const token = user.generateAuthToken();
    //    res.status(200).json({
    //     data:token,
    //     message:"User logged in successfully"
    //    })
    // } catch(error){
    //     res.status(500).send({message:"Internal Server error"})
    //   }
    //     }

    //     const validate = (data) => {
    //         const schema = Joi.object({
    //             email: Joi.string().email().required().label("Email"),
    //             password: Joi.string().required().label("Password"),
    //         });
    //         return schema.validate(data);
    //     };