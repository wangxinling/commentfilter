const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

const youtubeController = require("../controllers/youtubeController");
const controller = new youtubeController();

router.get("/",connectEnsureLogin.ensureLoggedIn(), controller.start); // show the page
router.get("/getcomments/:videoID",connectEnsureLogin.ensureLoggedIn(), controller.getcomments);// submit button response


module.exports = router;