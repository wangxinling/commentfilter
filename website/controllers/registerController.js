const User = require('../models/userModel');
const passport = require('passport');

class RegisterController {

  start(req, res) {
    res.render("layout/index", { template: 'register', isLogined: false });
  }
  async store(req, res) {
    const { username, email, password } = req.body;

    const newUser = await new User({ username: username, email: email });
    User.register(newUser, password, (err) => {
      if (err) {
        console.log(err);
      }
      else {
        newUser.isAuthenticated = true;
        newUser.save().then(err => {
          passport.authenticate("local")(req, res, () => {
            res.redirect('/');
          });

        });
      }

    });
  }
}

module.exports = RegisterController;

