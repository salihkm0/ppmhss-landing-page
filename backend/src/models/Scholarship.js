const mongoose = require("mongoose");

const ScholarshipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    target: { type: String, required: true },
    provider: { type: String, required: true },
    amount: { type: String, required: true },
    eligibility: { type: String, required: true },
    deadline: { type: String, required: true },
    applyUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Scholarship", ScholarshipSchema);

