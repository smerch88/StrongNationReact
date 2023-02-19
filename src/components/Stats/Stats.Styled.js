import { Box, styled } from '@mui/material';

export const StatsSection = styled('section')(({ theme }) => ({
  paddingTop: '52px',
  paddingBottom: '20px',
  color: [theme.palette.primary.contrastText],
  backgroundColor: [theme.palette.background.contrast],
  [theme.breakpoints.up('tablet')]: {
    paddingTop: '60px',
    paddingBottom: '60px',
  },
  [theme.breakpoints.up('desktop')]: {},
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'row',
    marginBottom: '60px',
  },
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    marginBottom: '60px',
  },
}));

export const Ul = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const Li = styled('li')(({ theme }) => ({
  padding: '50px 0',
  textAlign: 'center',
  width: '100%',
  '&:first-of-type': { borderBottom: '2px solid #FFFFFF' },
  [theme.breakpoints.up('tablet')]: {
    padding: '10px 48px',
    paddingRight: 0,
    width: 'auto',
    '&:first-of-type': {
      borderRight: '2px solid #FFFFFF',
      borderBottom: 0,
      paddingLeft: 0,
      paddingRight: '48px',
    },
  },
  [theme.breakpoints.up('desktop')]: {
    width: 'auto',
    padding: '20px 126px',
    paddingRight: 0,
    '&:first-of-type': {
      borderRight: '2px solid #FFFFFF',
      borderBottom: 0,
      paddingLeft: 0,
      paddingRight: '126px',
    },
  },
}));
