const express = require('express');
const bodyParser = require('body-parser');
const candidateController = require('../controllers/candidateController')

const urlEncodedParser = bodyParser.urlencoded({extended:false})

const app = express.Router();

//routes for adding candidate information
app.post('/create', urlEncodedParser, candidateController.createCandidateProfile);

//routes for getting candidate information
app.get("/fetch", urlEncodedParser);

//routes for updating candidate information
app.patch("/update", urlEncodedParser);

//routes for deleting candidate information

app.post("/delete", urlEncodedParser);



module.exports = app