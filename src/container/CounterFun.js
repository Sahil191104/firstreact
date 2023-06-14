import React, { useState } from 'react';

function CounterFun (props) {

    const [count, setCount] = useState(0);

    const increse = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    };
    
    const dicrese = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>Counter Function based Component</h1>
            <button disabled={count < 5 ? false: true} onClick={increse}>+</button>
            <span>{count}</span>
            <button disabled={count === 0 ? true: false} onClick={dicrese}>-</button>
        </div>
    );
}

export default CounterFun;