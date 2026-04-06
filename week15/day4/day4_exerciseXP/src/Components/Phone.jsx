import { useState } from "react";

const Phone = () => {
    const [item, setItem] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });
    const changeColor = () => {
        setItem({ ...item, color: "blue" })
    }
    return (
        <>
            <h1>My phone is a {item.brand}</h1>
            <p>It is a {item.color} {item.model} from {item.year}</p>
            <button onClick={changeColor}>Change color</button>
        </>
    )
};

export default Phone
