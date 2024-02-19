const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

// Middleware para parsear el cuerpo de solicitudes JSON
app.use(express.json());

// Rutas
app.use('/tasks', taskRoutes);

module.exports = app;
