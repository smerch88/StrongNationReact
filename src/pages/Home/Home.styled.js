import { styled } from '@mui/material';

import bg from '../../images/bgimagesection.jpg';

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

export const AboutTextWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    margin: '0 62px',
  },
}));
