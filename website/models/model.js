
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const passport = require('passport');

const uri = "mongodb://mike:pass123@mongodb:27017/SIT780";

mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;
const UserDetail = new Schema({
  username: String,
  password: String
});

UserDetail.plugin(passportLocalMongoose);
const UserDetails = mongoose.model('userInfo', UserDetail, 'userInfo');


passport.use(UserDetails.createStrategy());

passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());

// UserDetails.register({username:'paul', active: false}, 'paul');
UserDetails.register({username:'jay', active: false}, 'jay');
// UserDetails.register({username:'roy', active: false}, 'roy');
