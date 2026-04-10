const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// MongoDB connection (HARDCODED as required)
mongoose.connect('mongodb+srv://falkiayushi:Ayushi%402592@cluster0.pggkhql.mongodb.net/?appName=Cluster0')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
const bookRoutes = require('./routes/books.routes');
app.use(bookRoutes);

// server start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});