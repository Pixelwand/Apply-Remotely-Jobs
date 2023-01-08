const express = require('express');
var bodyParser = require('body-parser');
const userController = require('../controllers/userController.jsx')

var urlEncodedParser = bodyParser.urlencoded({extended:false})

const app = express.Router();


app.post(urlEncodedParser, userController.creatUser);

module.exports = app