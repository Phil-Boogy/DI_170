import { useState, useEffect } from "react"


const Color = () => {
    const [myFavoriteColor, setFavoriteColor] = useState("red");
    const changeColor = () => { setFavoriteColor("red") }

    useEffect(() => {
        alert("useEffect Reached")
        setFavoriteColor("yellow")

    }, []
    )
    return (
        <>
            <h1>My favorite color is {myFavoriteColor}</h1>
            <button onClick={changeColor}>Change color</button>
        </>
    )
};

export default Color