const express  = require('express');
const postjobController = require('../controllers/postJob');
const bodyParser = require('body-parser');

const app = express.Router();

app.post('/postjob', postjobController.createJobpost);

module.exports = app;