const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
    { id: 1, title: "The Pragmatic Programmer", author: "David Thomas & Andrew Hunt", publishedYear: 1999 },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 },
    { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", publishedYear: 2015 },
];

// Read all
app.get("/api/books", (req, res) => {
    res.json(books);
});

// Read one
app.get("/api/books/:bookId", (req, res) => {
    const book = books.find((b) => b.id === parseInt(req.params.bookId));
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
});

// Create
app.post("/api/books", (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books[books.length - 1].id + 1,
        title,
        author,
        publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`Book API server running on http://localhost:${PORT}`);
});