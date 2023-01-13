const express = require('express');
const mongoose  = require('mongoose');
require('dotenv').config({path:'config.env'})
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080

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

app.use(express.json());
app.use(cors());
app.use('/user', userRoutes)



app.listen(port, (req, res)=>{
    console.log(`Port is running on ${port}`)
} )

module.exports = app;