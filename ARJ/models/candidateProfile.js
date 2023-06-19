const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  intro: {
    type: String,
    require: true,
  },
  // experience: {
  //     type: String,
  //     require:true
  // },
  // companies: {
  //     name: {
  //         type: String,
  //         require:true
  //     },
  //     joiningTime: {
  //         type: Date
  //     },
  //     leavingTime: {
  //         type:Date
  //     },
  //     role: {
  //         type: String,
  //         require:String
  //     }

  // },
  // qualifications: {
  //     type: Array,
  //     require: true
  // },
  // certifications: {
  //     type: Array
  // },
  // portfolio: {
  //     type: String,
  //     require:true
  // },
  // github: {
  //     type: String,
  // },
  // twitter: {
  //     type: String
  // },
  // linkedin: {
  //     type: String,
  //     require:true
  // },
  // socials: {
  //     type: String,
  // },
  // skills: {
  //     type: Array,
  //     require:true
  // },
});

const Profile = mongoose.model("Profile", candidateSchema);

module.exports = Profile;
