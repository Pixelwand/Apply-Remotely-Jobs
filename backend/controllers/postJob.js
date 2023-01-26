const Jobpost = require('../models/postJobModel');

exports.createJobpost = async(req, res)=>{
try{const Job =  await Jobpost.create(req.body);
    console.log(req.body);
    
    res.status(201).send({
        message:"New Job Post Added Succesfully."
    })
} catch{
    res.status(501).send({
        message:"Internal Server Error!"
    })
}
}