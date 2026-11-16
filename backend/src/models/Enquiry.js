const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    parentName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    seekingGrade: { type: String, required: true },
    stream: { type: String },
    previousSchool: { type: String },
    marksPercentage: { type: String },
    notes: { type: String },
    status: {
      type: String,
      enum: ["Received", "Under Review", "Shortlisted", "Approved"],
      default: "Received",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", EnquirySchema);
