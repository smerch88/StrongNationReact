import { Box, styled, Typography } from '@mui/material';

export const StatsSection = styled('section')(({ theme }) => ({
  paddingTop: '33px',
  paddingBottom: '29px',
  color: [theme.palette.primary.contrastText],
  backgroundColor: [theme.palette.background.contrast],
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '78px',
    paddingBottom: '65px',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'row',
    marginBottom: '60px',
  },
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    marginBottom: '60px',
  },
}));

export const StatsTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    display: 'inline-block',
  },
  [theme.breakpoints.up('desktop')]: {
    display: 'inline-block',
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
    padding: '30px 48px',
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
