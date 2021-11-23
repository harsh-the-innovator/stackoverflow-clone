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
    Question.populate(question, { path: "tags" });
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

exports.getQuestionDetail = async (req, res) => {
  const { questionId } = req.params;
  try {
    if (!isValidObjectId(questionId)) {
      return res.status(400).json({
        message: "Invalid question id",
      });
    }
    const question = await Question.findById(questionId)
      .populate("tags")
      .exec();
    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    res.status(200).json({
      question,
      message: "Question created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.searchQuestionByTag = async (req, res) => {
  const { tags } = req.body;
  try {
    if (!tags) {
      return res.status(400).json({
        message: "Please provide valid tags",
      });
    }
    if (tags.length === 0) {
      return res.status(200).json({
        questionCount: 0,
        questionList: [],
      });
    }
    const invalidTagIsThere = tags.some((tag) => !isValidObjectId(tag));
    if (invalidTagIsThere) {
      return res.status(400).json({
        message: "Invalid Tag in tags array",
      });
    }

    const result = await Question.find({
      tags: {
        $in: tags,
      },
    })
      .populate("tags")
      .exec();
    res.status(200).json({
      questionCount: result.length,
      questionList: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const result = await Question.find({}).populate("tags").exec();
    res.status(200).json({
      questionCount: result.length,
      questionList: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.editQuestion = async (req, res) => {
  const { userId, questionId } = req.params;
  const { title, body, tags } = req.body;
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

    const question = await Question.findById(questionId).populate().exec();
    if (!question) {
      return res.status(404).json({
        message: "Question not found",
      });
    }

    if (!question.posted_by.equals(userId)) {
      return res.status(403).json({
        message: "You are not allowed to edit this question.",
      });
    }

    question.title = title;
    question.body = body;
    question.tags = tags;

    Question.populate(question, { path: "tags" });

    const result = await question.save();
    res.status(200).json({
      question: result,
      message: "Question updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
