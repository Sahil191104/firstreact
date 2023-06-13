import React, { useState } from 'react';

function CounterFun (props) {

    const [count, setCount] = useState(0);

    const increse = () => {
        setCount(count + 1);
    };
    
    const dicrese = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Counter Function based Component</h1>
            <button onClick={increse}>+</button>
            <span>{count}</span>
            <button onClick={dicrese}>-</button>
        </div>
    );
}

export default CounterFun;