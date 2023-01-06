const express = require('express');
const mongoose  = require('mongoose');
require('dotenv').config({path:'config.env'})

const app = express();
const port = process.env.PORT || 8000

const DB = process.env.URI
mongoose.connect(DB, {
    useNewUrlParser: true
}, ).then(()=>{
    console.log("Connections Successful")
}).catch((err)=>{
    console.log(`Connection error: ${err}`)
})


app.listen(port, (req, res)=>{
    console.log(`Port is running on ${port}`)
} )

module.exports = app;