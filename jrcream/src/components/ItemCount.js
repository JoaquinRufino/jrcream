import React, {useState} from "react";

const ItemCount = () => {
    const [count, setCount] = useState(1);

    const agregar = () => setCount(count + 1);

    const restar = () => setCount(count - 1);

    return (
        <div>
            <button onClick = {() => agregar ()}>+</button>
            <h1>{count}</h1>
            <button onClick = {() => restar ()}>-</button>

        </div>
    );
};

export default ItemCount;