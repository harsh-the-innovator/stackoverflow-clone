const router = require("express").Router();
const { check } = require("express-validator");

const { createTag } = require("../controllers/tag.controller");
const checkErrors = require("../middlewares/checkErrors");

router.post(
  "/tag/create/",
  [
    check("tagname", "tagname is required")
      .trim()
      .escape()
      .isLength({ min: 1 }),
  ],
  checkErrors,
  createTag
);

module.exports = router;
