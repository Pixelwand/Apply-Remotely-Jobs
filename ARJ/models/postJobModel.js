// const mongoose = require('mongoose');
// const jobSchema = new mongoose.Schema({
//     companyName:{
//         type:String,
//         require:true
//     },
//     companyEmail:{
//         type:String,
//         require:true
//     },
//     position:{
//         type:String,
//         require:true
//     },
//     jobtype:{
//         type:Object
//     },
//     primaryField:{
//         type:Object
//     },
//     techStack:{
//         type:String
//     },
//     locations:{
//         type:Object,
//     },
//     companyLogo:{
//     type:String
//     },
//     minSalary:{
//         type:Object
//     },
//     maxSalary:{
//         type:Object,
//         require:true
//     },
//     jobDescription:{
//         type:String,
//         require:true
//     },
//     howtoapply:{
//         type:String
//     },
//     applyUrl:{
//         type:String,
//         require:true
//     },
//     twitterUsername:{
//         type:String
//     },
//     secondEmail:{
//         type:String
//     }

// })

// const Jobpost = mongoose.model("Jobpost", jobSchema)
// module.exports = Jobpost;

const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
  abstractTitle: {
    type: String,
    require: true,
  },
  authorName: {
    type: String,
    require: true,
  },
  authorEmail: {
    type: String,
    require: true,
  },

  authorNumber: {
    type: Number,
    require: true,
  },
  authorOrganization: {
    type: String,
    require: true,
  },
  authorCountry: {
    type: String,
    require: true,
  },
  otherAuthorName: {
    type: String,
    require: true,
  },
  otherAuthorEmail: {
    type: String,
    require: true,
  },

  ohterAuthorNumber: {
    type: Number,
    require: true,
  },
  otherAuthorOrganization: {
    type: String,
    require: true,
  },
  otherAuthorCountry: {
    type: String,
    require: true,
  },

   abstractFile: {
    type: String,
    require: true,
  },
});

const Jobpost = mongoose.model("Jobpost", jobSchema);
module.exports = Jobpost;