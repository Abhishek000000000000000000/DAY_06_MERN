import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const tick = () => {
    setSeconds(prevSeconds => prevSeconds + 1);
  };

  return (
    <div>
      Seconds: {seconds}
    </div>
  );
};

export default Timer;
