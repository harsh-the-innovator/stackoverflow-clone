const router = require("express").Router();
const { check } = require("express-validator");

const { createTag, getTagList } = require("../controllers/tag.controller");
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

router.get("/tag/tag-list", getTagList);

module.exports = router;
