const profile = require('../models/userProfile')
const express = require('express');
const bodyParser = require('body-parser');
const userProfile = require('../controllers/userProfile')

const app = express.Router();
const urlEncodedParser = bodyParser.urlencoded({extended:false})

app.post('/profile', urlEncodedParser, userProfile.createProfile);


module.exports = app;
