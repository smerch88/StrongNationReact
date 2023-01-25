import { createTheme } from '@mui/material';

import '@fontsource/montserrat';
// import Bebas_Neue_Cyrillic from './fonts/Bebas_Neue_Cyrillic.ttf';

const mainTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg'],
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1440,
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

mainTheme.components = {
  MuiContainer: {
    defaultProps: {
      sx: {
        // Якщо ширина екрану більше (up) брейкпоінта lg, то паддінг = ...
        // Якщо ширина екрану менша (down) брейкпоінта lg, то паддінг = ...
        margin: '0 auto',
        padding: '0 36px',
        backgroundColor: 'blue',
        maxWidth: '480px',

        [mainTheme.breakpoints.up('sm')]: {
          width: '480px',
          backgroundColor: 'red',
        },
        [mainTheme.breakpoints.up('md')]: {
          width: '768px',
          backgroundColor: 'orange',
        },
        [mainTheme.breakpoints.up('lg')]: {
          width: '1440px',
          padding: '0 228px',
          backgroundColor: 'green',
        },
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'ukrstrong' },
        style: {
          color: mainTheme.palette.colorList.white,
          background: mainTheme.palette.colorList.green,
          '&:hover': {
            background: mainTheme.palette.colorList.lightgreen,
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
mainTheme.typography.h1 = {
  fontSize: '30px',
  fontWeight: 700,
  [mainTheme.breakpoints.up('lg')]: {
    fontSize: '50px',
  },
};

export default mainTheme;
