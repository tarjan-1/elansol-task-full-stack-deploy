const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    // check if user exists
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // user info to send in response
    const userInfo = {
      userId: user._id,
      name: user.name,
      email: user.email,
    };

    // jwt token new user
    const token = jwt.sign(
      {
        data: email,
      },
      process.env.JWT_SECRERT,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, userInfo });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = loginController;
