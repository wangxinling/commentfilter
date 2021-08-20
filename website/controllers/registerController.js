const User = require('../models/userModel');
const passport = require('passport');

class RegisterController {

  start(req, res) {
    res.render("layout/index", { template: 'register', isLogined: false });
  }
  async store(req, res) {
    const { username, email, password } = req.body;
    // User.register({username:"jay", active: false},"jay");

    const newUser = await new User({username: username,email:email,isAuthenticated:true});
    User.register(newUser, password, (err) => {
      if (err) {
        console.log(err);
      }
      else
      {
        passport.authenticate("local")(req, res, () => {
          res.redirect('/');
        });
      }
     
    });
  }
}

module.exports = RegisterController;

