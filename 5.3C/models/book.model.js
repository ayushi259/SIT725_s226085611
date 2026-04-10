const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  year: Number,
  genre: String,
  summary: String,
  price: mongoose.Schema.Types.Decimal128 // IMPORTANT
});

module.exports = mongoose.model('Book', bookSchema);