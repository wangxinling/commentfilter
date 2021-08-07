
/* ROUTES */
const router=require('express').Router();
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');

router.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info.message);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });

  })(req, res, next);
});

router.get('/login',
  (req, res) => res.sendFile('/public/html/login.html', {root: "./"})
);

router.get('/',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('/public/html/index.html', {root: "./"})

);

router.get('/private',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('/public/html/private.html', {root: "./"})
);

router.get('/user',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({user: req.user})
);

router.post('/logout', (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      req.logout();
      return res.redirect('/');
  
    })(req, res, next);
  });

  router.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })

module.exports = router;


