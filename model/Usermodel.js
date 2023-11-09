const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  First_name: {
    type: String,
    required: true,
  },
  Last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
  },
  mobile: {
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);