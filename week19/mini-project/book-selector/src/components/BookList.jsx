import { useSelector } from "react-redux";
import { useState } from "react";
import { selectAllBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from "../selectors/bookSelectors.js"


export const BookList = () => {
    const [genreSelected, setGenre] = useState("Show All");
    const allBooks = useSelector(selectAllBooks);
    const horrorBooks = useSelector(selectHorrorBooks);
    const sciFiBooks = useSelector(selectScienceFictionBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const changeHandler = (e) => setGenre(e.target.value);

    return (
        <>
            <span> Filter by genre:
                <select name="genres" id="genres" onChange={changeHandler}>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Show All">Show All</option>
                </select>
            </span>
            {genreSelected === "Show All" && allBooks.map(book => <div key={book.id}> {book.title}, {book.author}, {book.genre} </div>)}
            {genreSelected === "Fantasy" && fantasyBooks.map(book => <div key={book.id}> {book.title}, {book.author}, {book.genre} </div>)}
            {genreSelected === "Horror" && horrorBooks.map(book => <div key={book.id}> {book.title}, {book.author}, {book.genre} </div>)}
            {genreSelected === "Science Fiction" && sciFiBooks.map(book => <div key={book.id}> {book.title}, {book.author}, {book.genre} </div>)}
        </>
    )
}