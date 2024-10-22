const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const contactRoutes = require('./routes/contactRoutes');

// Use routes
app.use('/', contactRoutes);

// Middleware
app.use(express.json());

// Start server
app.listen(port, () => {console.log(`Example app listening on port ${port}!`);});