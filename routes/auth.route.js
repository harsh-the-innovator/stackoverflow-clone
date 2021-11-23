const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { signup, login } = require("../controllers/auth.controller");
const checkErrors = require("../middlewares/checkErrors");

router.post(
  "/signup",
  [
    check("username", "username is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("password", "Password should be atleast 8 character")
      .trim()
      .isLength({
        min: 8,
      }),
  ],
  checkErrors,
  signup
);

router.post(
  "/login",
  [
    check("username", "username is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("password", "Password should be atleast 8 character")
      .trim()
      .isLength({
        min: 8,
      }),
  ],
  checkErrors,
  login
);

module.exports = router;
