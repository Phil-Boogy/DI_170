import { useState } from "react";

const Events = () => {
    const [isToggleOn, setIsToggleOn] = useState(true)
    const clickMe = () => alert("I was clicked");
    const handleKeyDown = (e) => {
        if (e.key === "Enter") { alert(`The Enter key was pressed, your input is ${e.target.value}`) }
    };
    // const toggle = () => setIsToggleOn(!isToggleOn)
    const toggle = () => setIsToggleOn(prev => !prev)


    return (
        <>
            <button onClick={clickMe}>CLICK THE BUTTON</button>
            <input onKeyDown={handleKeyDown}></input>
            <button onClick={toggle}>Is toggled? {isToggleOn ? "YES" : "NO"}</button>
        </>
    )
};

export default Events