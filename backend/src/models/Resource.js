const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Question Paper",
        "Question Bank",
        "Holiday Worksheet",
        "Circular & GO",
        "Time Table",
        "Form",
      ],
      required: true,
    },
    grade: {
      type: String,
      enum: [
        "Class 8",
        "Class 9",
        "SSLC (Class 10)",
        "Plus One (+1)",
        "Plus Two (+2)",
        "General",
      ],
      required: true,
    },
    subject: { type: String },
    year: { type: String, default: "2024–25" },
    fileSize: { type: String, default: "1.2 MB" },
    downloadUrl: { type: String, required: true },
    dateAdded: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", ResourceSchema);
