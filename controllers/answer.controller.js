const Question = require("../models/question.model");
const Answer = require("../models/answer.model");
const User = require("../models/user.model");
const { isValidObjectId } = require("mongoose");

exports.createAnswer = async (req, res) => {
  const { userId } = req.params;
  const { questionId, body } = req.body;
  try {
    if (!isValidObjectId(userId) || !isValidObjectId(questionId)) {
      return res.status(400).json({
        message: "Invalid user id or question id",
      });
    }

    const user = await User.findById(userId).exec();
    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
      });
    }
    const question = await Question.findById(questionId)
      .select("answers posted_by")
      .exec();
    if (!question) {
      return res.status(400).json({
        message: "Invalid question",
      });
    }

    if (question.posted_by.equals(userId)) {
      return res.status(400).json({
        message: "You cannot answer the question which is posted by you",
      });
    }

    const newAnswer = new Answer({
      body,
      answered_by: userId,
      question: questionId,
    });

    const result = await newAnswer.save();
    question.answers.push(result._id);
    await question.save();
    res.status(200).json({
      answer: result,
      message: "Answer posted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
