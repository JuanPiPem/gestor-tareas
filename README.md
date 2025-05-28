# Task Manager API 📝

This is the **backend** for the **Task Manager** project, built with **Node.js**, **Express**, and **MongoDB**. It handles user authentication and CRUD operations for tasks.

## 🚀 Features

- User registration and login (with JWT)
- Authentication and authorization middleware
- Create, read, update, and delete tasks
- Modular structure with controllers, routes, and models

## 📦 Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Nodemon (for development)

## 🛠️ Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/JuanPiPem/gestor-tareas.git
cd gestor-tareas
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Create a `.env` file in the root directory and add the following:

\`\`\`env
PORT=5000
MONGO_URI=mongodb://localhost:27017/task_manager
JWT_SECRET=your_secret_key
\`\`\`

4. Run the development server:

\`\`\`bash
npm run start
\`\`\`

## 📬 Main Endpoints

| Method | Route              | Description                     |
| ------ | ------------------ | ------------------------------- |
| POST   | /api/auth/register | Register a new user             |
| POST   | /api/auth/login    | Log in a user                   |
| GET    | /api/tasks         | Get all tasks (protected)       |
| POST   | /api/tasks         | Create a new task (protected)   |
| PUT    | /api/tasks/:id     | Update a task by ID (protected) |
| DELETE | /api/tasks/:id     | Delete a task by ID (protected) |

## ✨ Contributing

Pull requests, issues, and suggestions are welcome!

## 🧑‍💻 Author

Juan Pablo Lezcano  
[GitHub](https://github.com/JuanPiPem)

---
