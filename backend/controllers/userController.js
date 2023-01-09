//const User = require('../models/userModel');
const Users = require('../models/userModel')

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