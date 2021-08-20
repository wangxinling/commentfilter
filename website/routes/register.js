const express = require('express');
const router = express.Router();

const RegisterController = require("../controllers/RegisterController");
const controller = new RegisterController();

router.get("/", (req, res) => controller.start(req, res)); // show the page
router.post("/", (req, res) => controller.store(req, res));// submit button response


module.exports = router;