//const User = require('../models/userModel');
const Users = require('../models/userModel')

//User Registration through custom form

exports.creatUser = async (req, res)=>{
    const newUser = await Users.create(req.body);
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
