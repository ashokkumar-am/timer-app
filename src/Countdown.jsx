import React, { useState, useRef } from "react";
const Countdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const decrement = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const addTime1 = () => {
    setSeconds(seconds + 1);
  };
  const addTime2 = () => {
    setSeconds(seconds + 10);
  };
  const addTime3 = () => {
    setSeconds(seconds + 60);
  };
  const startTimer = () => {
    decrement.current = setInterval(() => {
        setSeconds((seconds)=> seconds<=0 ? 0 : seconds - 1);
        setIsActive(true);
        setIsPaused(true);
    }, 1000);
  };
  
  const stopTimer = () => {
    clearInterval(decrement.current);
    setIsActive(false);
    setIsPaused(false);
  };
  const resetTimer = () => {
    clearInterval(decrement.current);
    setIsPaused(false);
    setSeconds(0);
  };
  return (
    <div className="TimerApp">
      <div className="Timer">
        <button onClick={addTime1} >
          1 sec
        </button>
        <button onClick={addTime2}>10 sec</button>
        <button onClick={addTime3}>1 min</button>
      </div>
      <div className="time">{seconds}</div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}> Stop</button>
        <button onClick={resetTimer}> Reset</button>
      </div>
    </div>
  );
};
export default Countdown;