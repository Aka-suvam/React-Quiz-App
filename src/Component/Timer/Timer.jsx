import React, { useState, useEffect } from 'react';
import { RxLapTimer } from "react-icons/rx";
import './Timer.css';

const Timer = ({ onTimeUp}) => {
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0 && minutes === 0) {
        clearInterval(interval);
         onTimeUp();//notisfy the parent component
      } else if (seconds === 0) {
        setMinutes(prevMinutes => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds(preSecond => preSecond-1);
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div className='timer'>
      <RxLapTimer  className='timer-icon' />
      <h2 className='timer-string'>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h2>
    </div>
  );
}

export default Timer;
