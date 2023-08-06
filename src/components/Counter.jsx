import React, {useState} from 'react';

const Counter = () => {
    const [counts, setCounts] = useState(0);
    function increment(){
        setCounts(counts + 1);
    }
    function decrement(){
        setCounts(counts - 1);
    }

    return (
        <div>

            <h1>{ counts }</h1>
            <hr />

            <button className="btn btn-success" onClick={increment}>Up</button>
            <button className="btn btn-success" onClick={decrement}>Down</button>
        </div>
    );
};

export default Counter;