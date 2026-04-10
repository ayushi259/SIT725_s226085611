const mongoose = require('mongoose');
const Book = require('./models/book.model');

mongoose.connect('mongodb+srv://falkiayushi:Ayushi%402592@cluster0.pggkhql.mongodb.net/?appName=Cluster0');

const seedBooks = async () => {
  await Book.deleteMany();

  await Book.insertMany([
    {
      id: "b1",
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      year: 2008,
      genre: "Science Fiction",
      summary: "The Three-Body Problem is the first novel...",
      price: mongoose.Types.Decimal128.fromString("29.99")
    },
    {
      id: "b2",
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      year: 1847,
      genre: "Classic",
      summary: "An orphaned governess...",
      price: mongoose.Types.Decimal128.fromString("22.00")
    },
    {
      id: "b3",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genre: "Classic",
      summary: "Elizabeth Bennet and Mr. Darcy...",
      price: mongoose.Types.Decimal128.fromString("22.00")
    },
    {
      id: "b4",
      title: "The English Patient",
      author: "Michael Ondaatje",
      year: 1992,
      genre: "Historical Fiction",
      summary: "In a ruined villa...",
      price: mongoose.Types.Decimal128.fromString("25.39")
    },
    {
      id: "b5",
      title: "Small Gods",
      author: "Terry Pratchett",
      year: 1992,
      genre: "Fantasy",
      summary: "In Omnia, the god Om...",
      price: mongoose.Types.Decimal128.fromString("31.99")
    }
  ]);

  console.log("Database seeded!");
  mongoose.connection.close();
};

seedBooks();