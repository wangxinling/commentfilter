const passport = require('passport');

class LoginController {
    // render page
    start(req, res) {
      res.render("layout/index",{template: 'login',isLogined: false, errorMessage:null});
    }
    // find the user and save a session for other pages
    login(req,res,next){

      passport.authenticate('local',
      (err, user, info) => {
        if (err) {
          return next(err);
        }
  
        if (!user) {
          return res.render("layout/index",{template: 'login',isLogined: false, errorMessage:"The email or password is worry! Try again."});
        }
  
        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          console.log("login successful");
  
          return res.redirect('/');
        });
  
      })(req,res,next);
 
    }
    logout(req,res,next){

        passport.authenticate('local',
          (err, user, info) => {
            if (err) {
              return next(err);
            }
      
            req.logout();
            return res.redirect('/');
      
          })(req, res, next);
      
    }
}

module.exports = LoginController;