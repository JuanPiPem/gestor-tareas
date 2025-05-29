const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Ruta protegida
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: `Tasks for user ${req.user.name}` });
});

module.exports = router;
