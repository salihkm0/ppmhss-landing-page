const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Campus", "Labs", "Arts", "Sports", "Events", "Clubs"],
      required: true,
    },
    categoryLabel: { type: String, required: true },
    imageUrl: { type: String, required: true },
    caption: { type: String, default: "" },
    year: { type: String, default: "2024–25" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Gallery", GallerySchema);

