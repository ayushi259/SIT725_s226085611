const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://falkiayushi:Ayushi%402592@cluster0.pggkhql.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    rating: Number,
    available: Boolean
});

const Book = mongoose.model("Book", BookSchema);

app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

app.post("/books", async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});

app.delete("/books/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));