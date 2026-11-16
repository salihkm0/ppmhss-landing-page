const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    category: {
      type: String,
      enum: ["Academic", "Admissions", "Events", "Sports", "Notices"],
      default: "Notices",
    },
    summary: { type: String, default: "" },
    content: { type: String, default: "" },
    isUrgent: { type: Boolean, default: false },
    author: { type: String, default: "Office of the Principal" },
    fileUrl: { type: String },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notice", NoticeSchema);
