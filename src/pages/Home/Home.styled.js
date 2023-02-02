import { Box, styled, Typography } from '@mui/material';

import bg from '../../images/bgimagesection.jpg';

export const StatsSection = styled('section')(({ theme }) => ({
  paddingTop: '33px',
  paddingBottom: '29px',
  color: [theme.palette.primary.contrastText],
  backgroundColor: [theme.palette.background.green],
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '78px',
    paddingBottom: '65px',
    marginBottom: '59px',
  },
}));

export const AboutSection = styled('section')(({ theme }) => ({
  paddingTop: '28px',
  paddingBottom: '17px',
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '76px',
    paddingBottom: '58px',
  },
}));

export const MapSection = styled('section')(({ theme }) => ({
  color: [theme.palette.primary.contrastText],
  background: `url(${bg})`,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
  },
}));

export const StatsTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    display: 'inline-block',
  },
}));

export const AboutTextWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    margin: '0 62px',
  },
}));
