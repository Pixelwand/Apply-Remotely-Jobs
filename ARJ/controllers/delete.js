const Jobpost = require('../models/postJobModel')

exports.deleteUser = async function run() {
  try {
    const token = { name: req.body.authorName };
    // Query for a movie that has title "Annie Hall"
    const result = await Jobpost.deleteOne(token);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  } catch {
    console.log("Internal error");
  } 
};