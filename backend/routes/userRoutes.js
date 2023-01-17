const express = require('express');
var bodyParser = require('body-parser');
const userRegister = require('../controllers/userRegister');
const userLogin  = require('../controllers/userLogin')

var urlEncodedParser = bodyParser.urlencoded({extended:false})

const app = express.Router();


app.post('/register', urlEncodedParser, userRegister.createUser);
app.post('/login', userLogin.findUser);
// app.get('/', (req, res)=>{
//     res.status(200).json("User found Successfully")
// })

module.exports = app