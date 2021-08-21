const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

const aiController = require("../controllers/aiController");

router.get("/",connectEnsureLogin.ensureLoggedIn(), aiController.start); // show the page
router.get("/prediction/:text",connectEnsureLogin.ensureLoggedIn(),(req, res)=>aiController.prediction(req, res));// submit button response


module.exports = router;