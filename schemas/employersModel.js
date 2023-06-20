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
  },
  { versionKey: false, timestamps: true }
);

const Employer = mongoose.model("employers", employerSchema);

module.exports = {
  Employer,
};
