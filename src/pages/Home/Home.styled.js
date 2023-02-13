import { styled } from '@mui/material';

import bg from '../../images/bgimagesection.jpg';

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
  background: `url(${bg})`,
  backgroundSize: 'cover',
}));

export const AboutTextWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    marginTop: '0 62px',
  },
  [theme.breakpoints.up('desktop')]: {
    margin: '0 62px',
  },
}));
