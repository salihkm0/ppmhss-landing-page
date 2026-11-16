const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Academic", "Sports", "Arts & Kalolsavam", "Institutional"],
      required: true,
    },
    year: { type: String, required: true },
    description: { type: String, required: true },
    badge: { type: String, default: "Honour" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Achievement", AchievementSchema);
