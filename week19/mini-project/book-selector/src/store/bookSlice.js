import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, title: "The Shining", author: "Stephen King", genre: "Horror" },
        { id: 2, title: "It", author: "Stephen King", genre: "Horror" },
        { id: 3, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
        { id: 4, title: "The Haunting of Hill House", author: "Shirley Jackson", genre: "Horror" },
        { id: 5, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
        { id: 6, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" },
        { id: 7, title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy" },
        { id: 8, title: "A Wizard of Earthsea", author: "Ursula K. Le Guin", genre: "Fantasy" },
        { id: 9, title: "The Way of Kings", author: "Brandon Sanderson", genre: "Fantasy" },
        { id: 10, title: "American Gods", author: "Neil Gaiman", genre: "Fantasy" },
        { id: 11, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
        { id: 12, title: "Neuromancer", author: "William Gibson", genre: "Science Fiction" },
        { id: 13, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", genre: "Science Fiction" },
        { id: 14, title: "Foundation", author: "Isaac Asimov", genre: "Science Fiction" },
        { id: 15, title: "The Martian", author: "Andy Weir", genre: "Science Fiction" },
        { id: 16, title: "Ender's Game", author: "Orson Scott Card", genre: "Science Fiction" },
        { id: 17, title: "1984", author: "George Orwell", genre: "Science Fiction" },
        { id: 18, title: "House of Leaves", author: "Mark Z. Danielewski", genre: "Horror" },
        { id: 19, title: "The Blade Itself", author: "Joe Abercrombie", genre: "Fantasy" },
        { id: 20, title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction" },
    ],
};

const bookSlice = createSlice({
    name: "books",
    initialState,
}
);

export default bookSlice.reducer;
