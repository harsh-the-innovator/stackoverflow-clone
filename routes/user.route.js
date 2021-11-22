const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signup } = require("../controllers/auth");

router.post("/signup", checkUserAlreadyExist, signup);

module.exports = router;
