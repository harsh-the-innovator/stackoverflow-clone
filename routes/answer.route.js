const router = require("express").Router();
const { check } = require("express-validator");

const { createAnswer } = require("../controllers/answer.controller");
const checkErrors = require("../middlewares/checkErrors");
const isAuthorized = require("../middlewares/isAuthorized");

router.post(
  "/answer/create/:userId",
  isAuthorized,
  [
    check("body", "answer body is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("questionId", "question id is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("userId", "user id is required").trim().escape().isLength({ min: 1 }),
  ],
  checkErrors,
  createAnswer
);

module.exports = router;
