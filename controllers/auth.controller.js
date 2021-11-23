const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtOptions = {
  algorithm: "HS256",
};

//signup controller
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userFound = await User.findOne({ username })
      .select("username")
      .exec();
    if (userFound) {
      return res.status(422).json({
        message: "User already exist",
      });
    }
    //if all go ok then hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User({
      username,
      password: hashedPassword,
    });

    // save into database
    const result = await user.save();

    res.status(200).json({
      userInfo: {
        username: result.username,
      },
      message: "Signup Successfull",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = await User.findOne({ username }).exec();

    if (!foundUser) {
      return res.status(401).json({
        message: "Incorect email or password",
      });
    }
    const matched = await bcrypt.compare(password, foundUser.password);

    if (!matched) {
      return res.status(401).json({
        message: "Incorect email or password",
      });
    }

    const payload = { userId: foundUser._id };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);

    res.status(200).json({
      userInfo: {
        userId: foundUser._id,
        username: foundUser.username,
      },
      token: accessToken,
      message: "Login successfull",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
