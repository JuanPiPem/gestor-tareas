const express = require("express");
const router = express.Router();

// Ruta de ejemplo
router.get("/tasks", (req, res) => {
  res.send("Tasks route");
});

module.exports = router;
