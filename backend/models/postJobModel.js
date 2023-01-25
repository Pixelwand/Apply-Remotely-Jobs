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
    }
})