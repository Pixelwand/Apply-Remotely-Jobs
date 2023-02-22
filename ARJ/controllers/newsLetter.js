const email = require('../models/newsLetter');

exports.emailSubscribe = async(req, res)=>{
    const user = await email.findOne({email:req.body.email});
    
    if(!user){
     email.create(req.body);
     console.log(req.body);
     res.status(200).send(
        {
            message:"User subscribed successfully"
        }
     )
    } else{
        return res.status(400).send("User already exists")
    }
}