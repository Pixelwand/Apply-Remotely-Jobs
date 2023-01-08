const express = require('express');
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended:false})

const app = express.Router();


app.post(urlEncodedParser, (req, res)=>{
    res.send('User account created successfully')
})

module.exports = app