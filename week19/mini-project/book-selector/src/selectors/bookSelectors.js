import { createSelector } from "@reduxjs/toolkit";

export const selectAllBooks = (state) => state.catalogue.books;

export const selectHorrorBooks = createSelector(
    [selectAllBooks], (books) => (books.filter((book) => (book.genre === "Horror")))
);

export const selectFantasyBooks = createSelector(
    [selectAllBooks], (books) => (books.filter((book) => (book.genre === "Fantasy")))
);

export const selectScienceFictionBooks = createSelector(
    [selectAllBooks], (books) => (books.filter((book) => (book.genre === "Science Fiction")))
);
