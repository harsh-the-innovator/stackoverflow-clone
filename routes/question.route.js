const router = require("express").Router();
const { check } = require("express-validator");

const {
  createQuestion,
  getQuestionDetail,
  searchQuestionByTag,
  getAllQuestions,
  editQuestion,
} = require("../controllers/question.controller");
const checkErrors = require("../middlewares/checkErrors");
const isAuthorized = require("../middlewares/isAuthorized");

router.post(
  "/question/create/:userId",
  isAuthorized,
  [
    check("title", "question title is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("body", "question body is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("tags", "tags should be array").isArray(),
  ],
  checkErrors,
  createQuestion
);

router.get("/question/:questionId", getQuestionDetail);

router.post(
  "/questions/tagged",
  [check("tags", "tags is required").isArray()],
  searchQuestionByTag
);

router.get("/questions/question-list", getAllQuestions);

router.put(
  "/question/update/:questionId/:userId",
  isAuthorized,
  [
    check("title", "question title is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("body", "question body is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
    check("tags", "tags should be array").isArray(),
  ],
  checkErrors,
  editQuestion
);

module.exports = router;
