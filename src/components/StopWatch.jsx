import React, { useEffect, useRef, useState } from "react";

function StopWatch() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  let timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);
  const handleReset = () => {
    setRunning(false);
    setTimer(0);
  };

  return (
    <div>
      <button onClick={() => setRunning(!running)}>Start/Stop</button>
      <p>{timer}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default StopWatch;
