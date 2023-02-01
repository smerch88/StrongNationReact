import { createTheme } from '@mui/material';

import '@fontsource/montserrat';
// import Bebas_Neue_Cyrillic from './fonts/Bebas_Neue_Cyrillic.ttf';

const theme = createTheme({
  breakpoints: {
    keys: ['phone', 'phablet', 'tablet', 'desktop'],
    values: {
      phone: 320,
      phablet: 480,
      tablet: 768,
      desktop: 1440,
    },
  },
  palette: {
    colorList: {
      black: '#000000',
      grey: '#888888',
      white: '#FFFFFF',
      green: '#839364',
      lightgreen: '#AFB78E',
    },
    primary: {
      main: '#839364',
      light: '#888888',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      green: '#839364',
    },
    text: {
      primary: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#49012E',
    },
  },
  typography: {
    fontFamily: ['Arial', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: 30,
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

theme.components = {
  MuiContainer: {
    defaultProps: {
      sx: {
        // Якщо ширина екрану більше (up) брейкпоінта desktop, то паддінг = ...
        // Якщо ширина екрану менша (down) брейкпоінта desktop, то паддінг = ...
        margin: '0 auto',
        padding: '0 36px',

        [theme.breakpoints.down('phablet')]: {
          maxWidth: '480px',
        },
        [theme.breakpoints.up('phablet')]: {
          width: '480px',
        },
        [theme.breakpoints.up('tablet')]: {
          width: '768px',
          padding: '0 32px',
        },
        [theme.breakpoints.up('desktop')]: {
          width: '1440px',
          padding: '0 228px',
        },
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'ukrstrong' },
        style: {
          color: theme.palette.colorList.white,
          background: theme.palette.colorList.green,
          '&:hover': {
            background: theme.palette.colorList.lightgreen,
          },
        },
      },
    ],
    defaultProps: {
      variant: 'ukrstrong',
      size: 'medium',
    },
  },
};

//typography settings
theme.typography.h1 = {
  fontSize: '30px',
  fontWeight: 700,
  [theme.breakpoints.up('lg')]: {
    fontSize: '50px',
  },
};

export default theme;
