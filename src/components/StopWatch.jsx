import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [searchText, setSearchText] = useState("");

  let timerRef = useRef(null);
  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 100);
      return () => clearInterval(timerRef.current);
    }
  }, [running]);

  const handleReset = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTimer(0);
  };

  useEffect(() => {
    if (searchText) {
      const timeout = setTimeout(() => {
        console.log(searchText);
      }, 500);
      return () => clearInterval(timeout);
    }
  }, [searchText]);
  return (
    <div>
      <button onClick={() => setRunning(!running)}>Start/Stop</button>
      <p>{timer}</p>
      <button onClick={handleReset}>Reset</button>
      <input
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className="border-2"
      />
    </div>
  );
}

export default StopWatch;
