const mongoose = require("mongoose");

const SiteSettingsSchema = new mongoose.Schema(
  {
    schoolInfo: { type: mongoose.Schema.Types.Mixed, required: true },
    administration: { type: mongoose.Schema.Types.Mixed, required: true },
    bannerAnnouncement: {
      text: { type: String, default: "Admissions Open for Academic Year 2025–26 (Plus One & High School)" },
      link: { type: String, default: "/admissions" },
      active: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SiteSettings", SiteSettingsSchema);
