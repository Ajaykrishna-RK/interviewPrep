import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  const decCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="justify-center max-w-md shadow flex flex-col">
      <button onClick={() => addCount()}>Inc</button>
      <button onClick={() => handleToggle()}>Toggle Count</button>
      <p className="text-center">{toggle ? count : ""}</p>
      <button onClick={() => decCount()}>Dec</button>
    </div>
  );
}

export default CounterApp;
