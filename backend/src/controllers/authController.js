const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, error: "Username and password required" });
    }

    const defaultAdminUser = process.env.ADMIN_USERNAME || "admin";
    const defaultAdminPass = process.env.ADMIN_PASSWORD || "admin123";

    // 1. Check database user or default environment fallback
    let user = await User.findOne({ username });
    let isMatch = false;

    if (user) {
      isMatch = await user.matchPassword(password);
    } else if (username === defaultAdminUser && password === defaultAdminPass) {
      isMatch = true;
    }

    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { username, role: "admin" },
      process.env.JWT_SECRET || "ppmhss_jwt_super_secret_key_2025",
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      message: "Login successful",
      token,
      user: { username, role: "admin" },
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

const getMe = async (req, res) => {
  return res.json({
    success: true,
    user: req.user,
  });
};

module.exports = { login, getMe };
