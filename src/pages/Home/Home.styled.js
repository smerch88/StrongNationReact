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
    paddingTop: '76px',
    paddingBottom: '58px',
  },
}));

export const MapSection = styled('section')(({ theme }) => ({
  color: [theme.palette.primary.contrastText],
  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 90%, rgba(255,255,255,1) 100%), url(${bg})`,
  backgroundSize: 'cover',
  paddingBottom: '73px',
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

  // transform: 'translateY(-73px)',
  // transformBox: 'stroke-box',
  // height: '100%',
  // [theme.breakpoints.up('phablet')]: {
  //   height: '300px',
  //   height: '10vw',
  // },
  // [theme.breakpoints.up('tablet')]: {
  //   height: '108px',
  //   height: '15vw',
  // },
  // [theme.breakpoints.up('desktop')]: {
  //   height: '281px',
  //   height: '15vw',
  // },
}));