const express = require("express");
const postjobController = require("../controllers/postJob");
const bodyParser = require("body-parser");
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();

app.post("/postjob", urlEncodedParser, postjobController.createJobpost);

module.exports = app;
