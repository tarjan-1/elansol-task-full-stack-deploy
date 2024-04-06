const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupController = async (req, res) => {
  try {
    const { name, dob, email, password } = req.body;

    // check if user already exists
    const doExists = await User.findOne({ email });
    if (doExists) {
      return res.status(400).json({ msg: "user alreday exists" });
    }

    // hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, dob, email, password: hashedPassword });

    if (newUser) {
      const userInfo = {
        userId: newUser._id,
        name: newUser.name,
        email: newUser.email,
      };

      // generate JWT token here
      const token = jwt.sign(
        {
          data: email,
        },
        process.env.JWT_SECRERT,
        { expiresIn: "1h" }
      );

      await newUser.save();

      res.status(201).json({
        jwt_token: token,
        userInfo,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = signupController;
