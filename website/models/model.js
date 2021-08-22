
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const passport = require('passport');


// const uri = "mongodb+srv://SIT780:171221@cluster0.evy6f.mongodb.net/SIT780Auth?retryWrites=true&w=majority";
const uri = "mongodb://mike:pass123@mongodb:27017/SIT780";

mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true });


const UserDetails = require('../models/userModel');

passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());


