const Jobpost = require("../models/postJobModel");

exports.createJobpost = async (req, res) => {
  try {
    await Jobpost.create(req.body);
    console.log(req.body, "data submitted successfully");

    res.status(201).send({
      message: "New Job Post Added Succesfully.",
    });
  } catch {
    res.status(501).send({
      message: "Internal Server Error!",
    });
  }
};
