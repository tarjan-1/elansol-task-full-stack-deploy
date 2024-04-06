const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name field cant be empty"],
    },

    dob: {
      type: Date,
      required: [true, "dob field cant be empty"],
    },

    email: {
      type: String,
      required: [true, "email field cant be empty"],
    },

    password: {
      type: String,
      required: [true, "password field cant be empty"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
