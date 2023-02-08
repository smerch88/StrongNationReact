import { createTheme } from '@mui/material';

import '@fontsource/montserrat';
import Bebas_Neue_Cyrillic from './fonts/Bebas_Neue_Cyrillic.ttf';

const theme = createTheme({
  breakpoints: {
    keys: ['phone', 'phablet', 'tablet', 'desktop'],
    values: {
      phone: 320,
      phablet: 480,
      tablet: 768,
      desktop: 1280,
    },
  },
  palette: {
    colorList: {
      black: '#000000',
      grey: '#455A64',
      white: '#FFFFFF',
      lightgrey: '#748E9A',
      almostblack: '#1F2528',
    },
    primary: {
      main: '#455A64',
      light: '#748E9A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      contrast: '#455A64',
    },
    text: {
      primary: '#000000',
      header: '#455A64',
      navbutton: '#1F2528',
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
  MuiCssBaseline: {
    styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        @font-face {
          font-family: 'Bebas';
          src: url(${Bebas_Neue_Cyrillic}) format('truetype');
          font-style: normal;
          font-weight: 400;
        }
        body {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main { 
          flex-grow: 1;
        }
        footer {
          flex-shrink: 0;
        }
        h1{
          margin: 0;
        }
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
        }
        a{
          text-decoration: none;
          color: currentColor;
          margin: 0;
          padding: 0;
        }
        .slick-slide > div {
          margin: 0 10px;
        }
        .slick-list {
          margin: 0 -10px;
        }
      `,
  },
  MuiContainer: {
    defaultProps: {
      sx: {
        // Якщо ширина екрану більше (up) брейкпоінта desktop, то паддінг = ...
        // Якщо ширина екрану менша (down) брейкпоінта desktop, то паддінг = ...
        margin: '0 auto',
        padding: '0 18px',

        [theme.breakpoints.down('phablet')]: {
          maxWidth: '480px',
        },
        [theme.breakpoints.up('phablet')]: {
          width: '480px',
        },
        [theme.breakpoints.up('tablet')]: {
          width: '768px',
          padding: '0 60px',
        },
        [theme.breakpoints.up('desktop')]: {
          width: '1366px',
          padding: '0 115px',
        },
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'ukrstrong' },
        style: {
          fontFamily: 'Bebas',
          fontStyle: 'normal',
          fontWeight: 400,
          borderRadius: '8px',
          padding: '14px 30px',
          fontSize: '20px',
          lineHeight: '24px',
          color: theme.palette.colorList.white,
          background: theme.palette.primary.main,
          '&:hover': {
            background: theme.palette.primary.light,
          },
        },
      },
      {
        props: { variant: 'navigation' },
        style: {
          margin: 0,
          padding: 0,
          fontFamily: 'Bebas',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '24px',
          color: theme.palette.text.navbutton,
        },
      },
      {
        props: { variant: 'regions' },
        style: {
          whiteSpace: 'nowrap',
          padding: '6px 10px 3px',
          border: '1px solid',
          borderColor: theme.palette.colorList.white,
          borderRadius: '12px',
          fontFamily: 'Bebas',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '15px',
          lineHeight: '18px',
          color: theme.palette.colorList.white,
          background: 'transparent',
          '&:hover': {
            background: theme.palette.colorList.lightgrey,
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
theme.typography.body1 = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '14px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '25px',
    lineHeight: '29px',
  },
};
theme.typography.h1 = {
  margin: 0,
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: ' 30px',
  lineHeight: '1.5',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '50px',
  },
};
theme.typography.h2 = {
  margin: 0,
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '36px',
  color: theme.palette.text.header,
  [theme.breakpoints.up('desktop')]: {
    fontWeight: 400,
    fontSize: '50px',
    lineHeight: '60px',
  },
};
theme.typography.h3 = {
  margin: 0,
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '36px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '50px',
    lineHeight: '60px',
  },
};
theme.typography.h4 = {
  margin: 0,
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '70px',
  lineHeight: '84px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '100px',
    lineHeight: '120px',
  },
};
theme.typography.h5 = {
  margin: 0,
  fontFamily: 'Arial',
  textTransform: 'uppercase',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '16px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '15px',
    lineHeight: '17px',
  },
};

export default theme;
