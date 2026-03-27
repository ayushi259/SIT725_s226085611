const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// Load book data
const books = require('./books.json');

// API endpoint to get books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});