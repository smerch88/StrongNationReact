import { styled } from '@mui/material';

export const MapWrap = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    paddingBottom: '12px',
  },
  [theme.breakpoints.up('desktop')]: {
    paddingBottom: '0px',
  },
}));

export const Text = styled('text')(({ theme }) => ({
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
  [theme.breakpoints.up('desktop')]: {
    '&:hover': {
      fill: '#455A64',
    },
  },
}));
