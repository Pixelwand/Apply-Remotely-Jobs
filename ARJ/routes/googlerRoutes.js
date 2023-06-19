const express = require("express");
const passport = require("passport");
const user = require("../models/googleModel");

const app = express.Router();

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
  function (req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("http://localhost:3000/dashboard");
    res.send(req.user.email);
  }
);
app.get("/logout", function (req, res) {
  res.redirect("http://localhost:3000/");
});

module.exports = app;
