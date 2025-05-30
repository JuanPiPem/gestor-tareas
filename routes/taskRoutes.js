// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

// Ruta para obtener todas las tareas del usuario logueado
router.get("/", authMiddleware, getTasks);

// Ruta para crear una nueva tarea
router.post("/", authMiddleware, createTask);

// Ruta para actualizar una tarea
router.put("/:id", authMiddleware, updateTask);
// Ruta para eliminar una tarea
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
