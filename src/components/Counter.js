import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    
    function increment() {
        setNumber(number + 1);
    }

    function decrement() {
        setNumber(number - 1);
    }

    return (
        <>
            <h1>Counter</h1>
            <h2>{number}</h2>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default Counter;
