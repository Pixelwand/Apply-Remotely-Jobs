const express = require('express');
var bodyParser = require('body-parser');
const userControllers = require('../controllers/userController')

var urlEncodedParser = bodyParser.urlencoded({extended:false})

const app = express.Router();


app.post('register', urlEncodedParser, userControllers.creatUser);
app.get('/login', userControllers.findUser);
// app.get('/', (req, res)=>{
//     res.status(200).json("User found Successfully")
// })

module.exports = app