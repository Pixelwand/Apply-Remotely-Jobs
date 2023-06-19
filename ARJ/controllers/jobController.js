const Jobs = require("../models/postJobModel");

exports.getJobs = async (req, res) => {
  try {
    await Jobs.find().then((result) => res.status(200).send(result));
  } catch {
    res.status(501).send("Internal Server Error");
  }
};
