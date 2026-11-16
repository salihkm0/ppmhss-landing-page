const mongoose = require("mongoose");

const AlumniSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    batchYear: { type: String, required: true },
    stream: { type: String, required: true },
    higherEducation: { type: String },
    currentProfession: { type: String, required: true },
    companyOrOrganization: { type: String },
    location: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    testimonial: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alumni", AlumniSchema);

