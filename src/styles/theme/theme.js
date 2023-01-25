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
});

mainTheme.components = {
  MuiContainer: {
    defaultProps: {
      sx: {
        // Якщо ширина екрану більше (up) брейкпоінта lg, то паддінг = ...
        padding: '0 36px',
        [mainTheme.breakpoints.up('lg')]: {
          padding: '0 228px',
        },
        // Якщо ширина екрану менша (down) брейкпоінта lg, то паддінг = ...

        [mainTheme.breakpoints.down('lg')]: {
          padding: '0 36px',
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
