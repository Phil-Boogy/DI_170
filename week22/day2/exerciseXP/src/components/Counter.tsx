import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    const [lastAction, setLastAction] = useState<string>("")
    const increment = () => {
        setCount(prev => prev + 1);
        setLastAction("increment")
    }
    const decrement = () => {
        setCount(prev => prev - 1);
        setLastAction("decrement")
    }
    return (
        <>
            <h3>Count: {count}</h3>
            <h4>Last action: {lastAction}</h4>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}