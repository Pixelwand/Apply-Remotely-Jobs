const User = require('../models/userModel');
// const bcrypt = require("bcrypt");
// const Joi = require("joi");

exports.findUser = async (req, res) => {
    try{
        // if (error)
		// 	return res.status(400).send({ message: error.details[0].message });
       const user  = await User.findOne({email:req.body.email});
    //    const validPassword = await bcrypt.compare(req.body.password, password);
    //    const password = await User.findOne({password:req.body.password});
       if (user){
        if(user.password === req.body.password){
            res.status(200).send({
                message:"User logged in successfully"
            })
        } else{
            res.status(400).send({
                message:"Incorrect email or password"
            })
        }
        
       }
       else{
          res.status(404).send({
            message:"User not found"
           })
       }
		


		// if (!validPassword){
		// 	return res.status(401).send({ message: "Invalid Email or Password",
        //     // password:user.password
        //  });
        // }
        

	// 	const token = user.generateAuthToken();
    //    res.status(200).json({
    //     data:token,
    //     message:"User logged in successfully"
    //    })
    } catch(error){
        res.status(500).send({message:"Internal Server error"})
      }
        }

        // const validate = (data) => {
        //     const schema = Joi.object({
        //         email: Joi.string().email().required().label("Email"),
        //         password: Joi.string().required().label("Password"),
        //     });
        //     return schema.validate(data);
        // };