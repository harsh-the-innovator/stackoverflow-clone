const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  tagname: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Tag", tagSchema);
