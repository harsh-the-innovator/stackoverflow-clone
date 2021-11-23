const Tag = require("../models/tag.model");

exports.createTag = async (req, res) => {
  const { tagname } = req.body;
  try {
    const newTag = new Tag({
      tagname,
    });
    await newTag.save();
    res.status(200).json({
      message: "Tag created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.getTagList = async (req, res) => {
  try {
    const tags = await Tag.find().exec();
    res.status(200).json({
      tagList: tags,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
