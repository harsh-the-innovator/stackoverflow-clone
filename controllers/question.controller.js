const Question = require("../models/question.model");
const User = require("../models/user.model");
const { isValidObjectId } = require("mongoose");

exports.createQuestion = async (req, res) => {
  const { title, body, tags } = req.body;
  const { userId } = req.params;
  try {
    if (!isValidObjectId(userId)) {
      return res.status(400).json({
        message: "Invalid user id",
      });
    }
    const user = await User.findById(userId).exec();
    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
      });
    }
    const invalidTagIsThere = tags.some((tag) => !isValidObjectId(tag));
    if (invalidTagIsThere) {
      return res.status(400).json({
        message: "Invalid Tag in tags array",
      });
    }
    const question = new Question({
      title,
      body,
      posted_by: user._id,
      tags,
    });

    const result = await question.save();
    res.status(200).json({
      question: result,
      message: "Question created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
