const express = require("express");
const newsLetterController = require("../controllers/newsLetter");
const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();

app.post("/subscribe", newsLetterController.emailSubscribe);

module.exports = app;
