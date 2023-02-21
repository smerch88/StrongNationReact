import { styled } from '@mui/material';

import bg from '../../images/bgimagesection.jpeg';

export const AboutSection = styled('section')(({ theme }) => ({
  paddingTop: '43px',
  paddingBottom: '28px',
  [theme.breakpoints.up('tablet')]: {
    paddingTop: '59px',
    paddingBottom: '75px',
  },
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '59px',
    paddingBottom: '75px',
  },
}));

export const MapSection = styled('section')(({ theme }) => ({
  paddingTop: '120px',
  color: [theme.palette.primary.contrastText],
  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 90%, rgba(255,255,255,1) 100%), url(${bg})`,
  backgroundSize: 'cover',
  paddingBottom: '126px',
  [theme.breakpoints.up('tablet')]: {
    paddingTop: '180px',
  },
  [theme.breakpoints.up('desktop')]: {
    backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 92%, rgba(255,255,255,1) 100%), url(${bg})`,
    paddingTop: '204px',
    marginBottom: '53px',
  },
}));

export const AboutTextWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    marginTop: '0 62px',
  },
  [theme.breakpoints.up('desktop')]: {
    margin: '0 62px',
  },
}));

export const AutoPlayBox = styled('div')(({ theme }) => ({
  transform: 'translateY(-126px)',
  [theme.breakpoints.up('tablet')]: {},
  [theme.breakpoints.up('desktop')]: {},
}));
