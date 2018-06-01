import React from 'react';

const Counter = (props) => {
    return (
        <div>
            <h1>Counter: {props.count}</h1>
            <button onClick={props.inc}>Inc</button>
            <button onClick={props.reset}> Reset</button>
            <button onClick={props.dec}>Dec</button>
        </div>
    );
};

export default Counter;