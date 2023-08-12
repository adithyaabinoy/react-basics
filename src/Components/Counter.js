import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  

const increment = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
   
}

const decrement = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
}


  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>REMOVE</button>
    </div>
  );
}

export default Counter;
