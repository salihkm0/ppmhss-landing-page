const mongoose = require("mongoose");

const ClubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    coordinator: { type: String, required: true },
    description: { type: String, required: true },
    activities: [{ type: String }],
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Club", ClubSchema);

