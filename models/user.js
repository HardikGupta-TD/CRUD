var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const User = Schema(
  {
    email: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      default: null,
    },
    name: String,
    contactNo: {
      type: Number,
      default: 0,
    },
    dob: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", User);