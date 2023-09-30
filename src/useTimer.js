import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const isStart = useRef(false);
  const active = useRef({disabled: false})
  const refInterval = useRef(0);

  const startTimer = () => {
    "Your code here";
    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart.current){
        setTime((time) => time+1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    "Your code here";
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    "Your code here";
    isStart.current = false;
    active.current.disabled = false;
    clearInterval(refInterval.current);
    setTime(0);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
