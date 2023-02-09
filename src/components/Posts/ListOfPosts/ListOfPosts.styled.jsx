import { styled } from '@mui/material';

export const UlElement = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',
  //   [theme.breakpoints.up('tablet')]: {
  //     marginTop: '0 62px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     margin: '0 62px',
  //   },
}));
