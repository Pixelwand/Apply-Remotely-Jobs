const express = require('express');

const app = express.Router();

app.get('/jobs', (req, res)=>{
    res.send("Job found successfully");
})


module.exports = app;