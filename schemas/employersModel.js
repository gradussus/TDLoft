const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    login: {
      type: String,
    },
    password: {
      type: String,
    },
    register: {
      type: Boolean,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Employer = mongoose.model("employers", employerSchema);

module.exports = {
  Employer,
};
