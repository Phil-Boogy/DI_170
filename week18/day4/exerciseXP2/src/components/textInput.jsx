import { useRef, useState } from 'react';
import { CounterDisplay } from './counterDisplay';

export const TextInput = () => {
    const [charCount, setCount] = useState(0);
    const inputRef = useRef(null);

    const handleInput = () => setCount(inputRef.current.value.length)

    return <>
        <input type="text" ref={inputRef} onInput={handleInput} />
        <CounterDisplay charCount={charCount} />
    </>
};