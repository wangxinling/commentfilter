const express = require('express');
const router = express.Router();

const RegisterController = require("../controllers/registerController");
const controller = new RegisterController();

router.get("/", controller.start); // show the page
router.post("/", controller.store);// submit button response


module.exports = router;