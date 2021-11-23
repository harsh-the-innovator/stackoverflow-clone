const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const answerSchema = new mongoose.Schema(
  {
    body: {
      type: String,
      trim: true,
      required: true,
    },
    answered_by: {
      type: ObjectId,
      ref: "User",
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    question: {
      type: ObjectId,
      ref: "Question",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Answer", answerSchema);
