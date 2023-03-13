const { styled } = require('@mui/material');

export const RegionsList = styled('ul')(({ theme }) => ({
  display: 'flex',
  marginLeft: '10px',
  gap: '12px',
  paddingBottom: '20px',
  '&:first-of-type': {
    marginTop: '20px',
    paddingBottom: '12px',
  },
  [theme.breakpoints.up('tablet')]: {
    marginLeft: '60px',
    gap: '14px',
    paddingBottom: '43px',
    '&:first-of-type': {
      paddingBottom: '20px',
      marginTop: '0',
    },
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'none',
  },
}));
