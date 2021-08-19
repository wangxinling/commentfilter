/* ROUTES */
// const tf = require('@tensorflow/tfjs-node');
// const toxicity = require('@tensorflow-models/toxicity');

const router = require('express').Router();
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

      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }

        return res.redirect('/');
      });

    })(req, res, next);
});

router.get('/login',
  (req, res) => res.sendFile('/public/html/login.html', { root: "./" })
);

router.get('/',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('/public/html/index.html', { root: "./" })

);

router.get('/private',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('/public/html/private.html', { root: "./" })
);

router.get('/user',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.send({ user: req.user })
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
// let model;
// async function runServer() {
//   const threshold = 0.9;
//   model = await toxicity.load(threshold);
//   console.log('AI model is ready' );
// }

// runServer();
// router.get('/toxicity/:text', function (req, res, next) {
//   var text = req.params.text;

//   model.classify(["you suck"]).then(predictions => {

//     predictions.map(prediction => {
//       if (prediction.results[0].match) {
//         console.log(prediction.label);
//         /*
//       returns 'insult'.
//       */
//       }
//     }
//     //res.json({ result: predictions, statusCode: 200 }).status(200);
//   )}
//   );

// });

module.exports = router;


