/* ROUTES */
const router = require('express').Router();
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');

const register = require('./register');
const login = require('./login');
const ai = require('./aiRouter');
const youtube = require('./youtube');

router.use('/login', login);
router.use('/register', register);
router.use("/ai",ai);
router.use("/youtube",youtube);

router.get('/',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.render("layout/index",{template: 'home',isLogined: true, user_name:req.user.username})

);


module.exports = router;


