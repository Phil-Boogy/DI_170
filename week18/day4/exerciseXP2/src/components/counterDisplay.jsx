import { useRef, useState } from 'react';

export const CounterDisplay = ({ charCount }) => {
    return <>
        <span>Count: {charCount}</span>
    </>
}