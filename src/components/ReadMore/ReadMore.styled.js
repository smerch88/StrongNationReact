const { styled } = require('@mui/material');

export const RegionsList = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  paddingBottom: '20px',
  [theme.breakpoints.up('tablet')]: {
    paddingBottom: '40px',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'none',
  },
}));
