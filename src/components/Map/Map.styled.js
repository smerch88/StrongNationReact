import { styled } from '@mui/material';

export const Text = styled('text')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {},
  [theme.breakpoints.up('desktop')]: {
    cursor: 'pointer',
    textAnchor: 'middle',
    fill: '#FFFFFF',
    fontFamily: 'Bebas',
    fontSize: '16px',
  },
}));

export const Path = styled('path')(({ theme }) => ({
  cursor: 'pointer',
  [theme.breakpoints.up('tablet')]: {},
  [theme.breakpoints.up('desktop')]: {
    '&:hover': {
      fill: '#455A64',
    },
  },
}));
