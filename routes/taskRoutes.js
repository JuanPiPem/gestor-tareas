// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createTask, getTasks } = require("../controllers/taskControllers");

// Ruta para obtener todas las tareas del usuario logueado
router.get("/", authMiddleware, getTasks);

// Ruta para crear una nueva tarea
router.post("/", authMiddleware, createTask);

module.exports = router;
