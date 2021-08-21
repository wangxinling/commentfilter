const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

const aiController = require("../controllers/aiController");
const controller = new aiController();

router.get("/",connectEnsureLogin.ensureLoggedIn(), controller.start); // show the page
router.get("/prediction/:text",connectEnsureLogin.ensureLoggedIn(), controller.prediction);// submit button response


module.exports = router;