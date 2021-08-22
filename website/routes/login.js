const express = require('express');
const router = express.Router();

const LoginController = require("../controllers/loginController");
const controller = new LoginController();

router.get("/", controller.start); // show the page
router.post("/", controller.login);// login button response
router.get('/logout',controller.logout);// logout

module.exports = router;