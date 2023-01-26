const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
    companyName:{
        type:String,
        require:true
    },
    companyEmail:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    jobtypes:{
        type:Array,
        require:true
    },
    primaryField:{
        type:String
    },
    techStack:{
        type:String
    },
    location:{
        type:String,
        require:true
    },
    companyLogo:{
        type:String
    },
    minSalary:{
        type:String,
        require:true
    },
    maxSalary:{
        type:String,
        require:true
    },
    jobDescription:{
        type:String,
        require:true
    },
    benefits:{
        type:String
    },
    howtoapply:{
        type:String
    },
    applyUrl:{
        type:String,
        require:true
    },
    twitterUsername:{
        type:String
    },
    secondEmail:{
        type:String
    },
    terms:{
        type:String,
        require:true
    }

})

const Jobpost = mongoose.model("Jobpost", jobSchema)
module.exports = Jobpost;