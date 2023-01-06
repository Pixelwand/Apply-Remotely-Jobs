const express = require('express');
const mongoose  = require('mongoose');
require('dotenv').config({path:'config.env'})
const userRegistration = require('./routes/userRoutes.jsx')

const app = express();
const port = process.env.PORT || 8000

//Connected to the MongoDB Database

const DB = process.env.URI
mongoose.connect(DB, {
    useNewUrlParser: true
}, ).then(()=>{
    console.log("Connections Successful")
}).catch((err)=>{
    console.log(`Connection error: ${err}`)
})

//Middleware
app.use('/', userRegistration)

app.listen(port, (req, res)=>{
    console.log(`Port is running on ${port}`)
} )

module.exports = app;