const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const { login, getMe } = require("../controllers/authController");
const createCrud = require("../controllers/crudController");

// Models
const Notice = require("../models/Notice");
const Teacher = require("../models/Teacher");
const Gallery = require("../models/Gallery");
const Resource = require("../models/Resource");
const Scholarship = require("../models/Scholarship");
const Club = require("../models/Club");
const Achievement = require("../models/Achievement");
const Enquiry = require("../models/Enquiry");
const Contact = require("../models/Contact");
const Alumni = require("../models/Alumni");
const SiteSettings = require("../models/SiteSettings");

// Auth routes
router.post("/auth/login", login);
router.get("/auth/me", authMiddleware, getMe);

// Settings routes
router.get("/settings", async (req, res) => {
  try {
    const settings = await SiteSettings.findOne();
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

router.put("/settings", authMiddleware, async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = new SiteSettings(req.body);
    } else {
      Object.assign(settings, req.body);
    }
    await settings.save();
    res.json({ success: true, message: "Settings updated", data: settings });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Stats route
router.get("/stats", authMiddleware, async (req, res) => {
  try {
    const [
      notices,
      teachers,
      gallery,
      resources,
      scholarships,
      clubs,
      achievements,
      enquiries,
      contacts,
      alumni,
    ] = await Promise.all([
      Notice.countDocuments(),
      Teacher.countDocuments(),
      Gallery.countDocuments(),
      Resource.countDocuments(),
      Scholarship.countDocuments(),
      Club.countDocuments(),
      Achievement.countDocuments(),
      Enquiry.countDocuments(),
      Contact.countDocuments(),
      Alumni.countDocuments(),
    ]);

    res.json({
      success: true,
      stats: { notices, teachers, gallery, resources, scholarships, clubs, achievements, enquiries, contacts, alumni },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Helper for model routes: public GET, protected POST/PUT/DELETE
function setupModelRoutes(endpoint, model, name) {
  const crud = createCrud(model, name);
  router.get(`/${endpoint}`, crud.getAll);
  router.get(`/${endpoint}/:id`, crud.getById);
  router.post(`/${endpoint}`, authMiddleware, crud.create);
  router.put(`/${endpoint}/:id`, authMiddleware, crud.update);
  router.delete(`/${endpoint}/:id`, authMiddleware, crud.delete);
}

setupModelRoutes("notices", Notice, "Notice");
setupModelRoutes("teachers", Teacher, "Teacher");
setupModelRoutes("gallery", Gallery, "Gallery Photo");
setupModelRoutes("resources", Resource, "Resource");
setupModelRoutes("scholarships", Scholarship, "Scholarship");
setupModelRoutes("clubs", Club, "Club");
setupModelRoutes("achievements", Achievement, "Achievement");

// Public submission endpoints (Enquiry, Contact, Alumni) with protected admin management
const enquiryCrud = createCrud(Enquiry, "Enquiry");
router.post("/enquiries", enquiryCrud.create); // public submit
router.get("/enquiries", authMiddleware, enquiryCrud.getAll);
router.put("/enquiries/:id", authMiddleware, enquiryCrud.update);
router.delete("/enquiries/:id", authMiddleware, enquiryCrud.delete);

const contactCrud = createCrud(Contact, "Contact");
router.post("/contacts", contactCrud.create); // public submit
router.get("/contacts", authMiddleware, contactCrud.getAll);
router.put("/contacts/:id", authMiddleware, contactCrud.update);
router.delete("/contacts/:id", authMiddleware, contactCrud.delete);

const alumniCrud = createCrud(Alumni, "Alumni");
router.post("/alumni", alumniCrud.create); // public submit
router.get("/alumni", authMiddleware, alumniCrud.getAll);
router.put("/alumni/:id", authMiddleware, alumniCrud.update);
router.delete("/alumni/:id", authMiddleware, alumniCrud.delete);

module.exports = router;
