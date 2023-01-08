//const User = require('../models/userModel');
const Users = require('../models/userModel.json')

exports.creatUser = (req, res)=>{
    //const newUser = await User.create(req.body);
    Users.push(req.body)
    console.log(req.body)

    res.status(201).json({
        
        body:req.body,
        // status:succes,
        message:"User added successfully in the user database",
        list:Users,

        // data:{
        //     User:newUser
        // }
    })
}