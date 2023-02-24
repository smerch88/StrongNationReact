/* eslint-disable no-unused-vars */
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export const Timer = () => {
  const [date, setDate] = useState(new Date());

  const STARTDATE = new Date('24 February, 2022');
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

  function getDayWord(num) {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;
    
    if (lastDigit === 1 && lastTwoDigits !== 11) {
      return 'день';
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
      return 'дні';
    } else {
      return 'днів';
    }
  }

  return (
    <Typography variant="h3" component="span" sx={{ display: 'inline-block' }}>
      нашi досягнення за {days} {getDayWord(days)}
    </Typography>
  );
};
