import { styled } from '@mui/material';

export const UlElement = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '25px',
  },
  [theme.breakpoints.up('desktop')]: {
    gap: '36px',
    flexWrap: 'wrap',
  },
}));
