const User = require("../models/userModel");
// const bcrypt = require("bcrypt");
// const joi = require('joi');

//User Registration through custom form

exports.createUser = async (req, res) => {
  try {
    const token = { email: req.body.email };
    const user = await User.findOne(token);
    if (user) {
      return res.status(400).send("User already exists");
    } else {
      User.create(req.body);
      console.log(req.body);
      res.status(201).send({
        token: user,
      });
    }
    // const {error} = validate(req.body);
    // if(error){
    //     res.status(400).send({message:error})
    // }
    // const user = await User.findOne(req.body);
    // if(user){
    //     res.status(409).send({
    //         message:"User with given email already exists"
    //     })
    // }
    // else
    //  {await User.create(req.body);
    // console.log(req.body)

    // res.status(201).send({
    //     message:"New user created successfully"
    // })}
  } catch {
    res.status(501).send({
      message: "Internal server error",
    });
  }
};

// exports.findUser = async (req, res) => {
//     try{
//        const user  = await User.findOne({email:req.body.email})
//        res.status(200).send({
//         message:"User logged in successfully"
//        })
//     } catch{
//       if(error){
//         res.status(500).send({message:"Internal Server error"})
//       }
//     }
//         }
