const {User, validate} = require('../models/userModel');
const bcrypt = require("bcrypt");

//User Registration through custom form

exports.creatUser = async (req, res)=>{
    try{
        const {error} = validate(req.body);
        if(error){
            res.status(400).send({message:error})
        } 
        const user = await User.findOne({email:req.body.email});
        if(user){
            res.status(409).send({
                message:"User with given email already exists"
            })
        }
     await User.create(req.body);
    console.log(req.body)

    res.status(201).json({
        
        body:req.body,
        // status:succes,
        message:"User added successfully in database",
        // list:Users,

        data:{
            User:newUser
        }
    })
} catch{

}
}

exports.findUser = async (req, res) => {
    await Users.find().then(
    result=>{
        res.status(200).json({
            message:"User details",
            userDetails:result
        })
    }
    ).catch(
        error=>{
            
            res.status(404).json({
                message:"User not found",
                error:error
            })
          })
        }
