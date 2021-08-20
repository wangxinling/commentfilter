const express = require('express');
const router = express.Router();

const LoginController = require("../controllers/LoginController");
const controller = new LoginController();

router.get("/", (req, res) => controller.start(req, res)); // show the page
router.post("/", (req, res) => controller.login(req, res));// login button response


module.exports = router;