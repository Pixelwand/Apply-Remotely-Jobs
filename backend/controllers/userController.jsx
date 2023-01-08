const User = require('../models/userModel.jsx');

exports.creatUser = ()=>{
    const newUser = User.create(req.body);

    res.status(201).json({
        body:req.body,
        status:succes,

        data:{
            User:newUser
        }
    })
}