const express = require("express");
const deleteController = require("../controllers/delete");

const app = express.Router();

app.delete("/:name", deleteController.deleteUser);

module.exports = app;
