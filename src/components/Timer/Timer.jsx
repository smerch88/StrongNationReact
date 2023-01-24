import { useState, useEffect } from 'react';

export const Timer = () => {
  const [date, setDate] = useState(new Date());

  const STARTDATE = new Date('1 January, 2023');
  const now = new Date();
  const distance = now - STARTDATE;
  const days = Math.floor(distance / (24 * 60 * 60 * 1000));

  function refreshTimer() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshTimer, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span>
      {days} днів {date.toLocaleTimeString()}
    </span>
  );
};
