const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    body: {
      type: String,
      trim: true,
      required: true,
    },
    posted_by: {
      type: ObjectId,
      ref: "User",
    },
    acceptedAnswer: {
      type: ObjectId,
      ref: "Answer",
      default: null,
    },
    tags: {
      type: [
        {
          type: ObjectId,
          ref: "Tag",
        },
      ],
      default: [],
    },
    answers: {
      type: [
        {
          type: ObjectId,
          ref: "Answer",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
