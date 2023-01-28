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
const stripe = require("stripe")("sk_test_51KhUdsSEgFbXr4KRvfZmGhTMqJxdu7SZYdg0R3gSxNmItsm8gHkuGN87QxgorWXrEUanrQahFkDQ55pNHwnbs79P00dG3NhLPW");

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
app.use('', googleRoutes)

const YOUR_DOMAIN = 'http://localhost:8080';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1MVBVFSEgFbXr4KRssEqURcV',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(port, (req, res)=>{
    console.log(`Port is running on ${port}`)
} )

module.exports = app;