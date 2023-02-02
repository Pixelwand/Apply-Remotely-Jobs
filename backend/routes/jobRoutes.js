const express = require('express');
const jobController = require('../controllers/jobController')

const app = express.Router();

app.get('/jobs', jobController.getJobs)


module.exports = app;