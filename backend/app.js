const express = require('express');
const mongoose  = require('mongoose');
require('dotenv').config({path:'config.env'})
const userRoutes = require('./routes/userRoutes');
const googleRoutes = require('./routes/googlerRoutes');
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const postjobRoutes = require('./routes/postJob');
const jobRoutes = require('./routes/jobRoutes')

const User = require('./models/userModel');
const Profile = require('./models/googleModel');

const app = express();
const port = process.env.PORT || 8080

//Connected to the MongoDB Database

const DB = process.env.URI

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

mongoose.connect(DB, {
    useNewUrlParser: true
}, ).then(()=>{
    console.log("Connections Successful")
}).catch((err)=>{
    console.log(`Connection error: ${err}`)
})

// mongoose.set("useCreateIndex", true);


//google authentication

  passport.use(Profile.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  Profile.findById(id, function(err, user) {
    done(err, user);
  });
});
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    Profile.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
//Middleware
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

app.use(express.static("public"))
app.use(express.json());
app.use(cors());
app.use('/user', userRoutes)
app.use('/user', postjobRoutes)
app.use('/', googleRoutes)
app.use('/user', jobRoutes)

app.get('/api/cofig/paypal', (req, res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID)
})
app.listen(port, (req, res)=>{
    console.log(`Port is running on ${port}`)
} )

module.exports = app;