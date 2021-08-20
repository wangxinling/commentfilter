// import required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongooseEmail = require('passport-local-mongoose-email');

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String
});

UserSchema.plugin(passportLocalMongooseEmail,{usernameField:"email"});

// create and export tool instance
const User = mongoose.model('user', UserSchema, 'user');
module.exports = User;