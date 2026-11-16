const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

dotenv.config();

const Notice = require("../models/Notice");
const Teacher = require("../models/Teacher");
const Gallery = require("../models/Gallery");
const Resource = require("../models/Resource");
const Scholarship = require("../models/Scholarship");
const Club = require("../models/Club");
const Achievement = require("../models/Achievement");
const SiteSettings = require("../models/SiteSettings");
const User = require("../models/User");

const seedDatabase = async () => {
  try {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ppm_hss_db";
    await mongoose.connect(uri);
    console.log("Connected to MongoDB for seeding...");

    // Create Admin user
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "admin123";
    const existingUser = await User.findOne({ username: adminUser });
    if (!existingUser) {
      await User.create({ username: adminUser, password: adminPass, role: "admin" });
      console.log(`Created default admin user: ${adminUser}`);
    }

    // Seed notices if empty
    const noticeCount = await Notice.countDocuments();
    if (noticeCount === 0) {
      await Notice.create([
        {
          title: "Admissions Commenced for Plus One (Class 11) via HSCAP Kerala Portal 2025–26",
          date: "2025-03-01",
          category: "Admissions",
          summary: "Official notification for Plus One single-window admission registration.",
          isUrgent: true,
          author: "Principal Desk",
        },
        {
          title: "Higher Secondary Board Practical Examinations Schedule 2025",
          date: "2025-02-18",
          category: "Academic",
          summary: "Physics, Chemistry, Biology and Computer Science practical dates published.",
          isUrgent: false,
          author: "Examination Cell",
        },
      ]);
      console.log("Seeded default notices");
    }

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

seedDatabase();

