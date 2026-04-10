const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books.controller');

router.get('/api/books', bookController.getAllBooks);
router.get('/api/books/:id', bookController.getBookById);

// integrity route
router.get('/api/integrity-check42', (req, res) => {
  res.status(204).send();
});

module.exports = router;