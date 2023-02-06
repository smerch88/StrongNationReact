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
        padding: '0 36px',

        [theme.breakpoints.down('phablet')]: {
          maxWidth: '480px',
        },
        [theme.breakpoints.up('phablet')]: {
          width: '480px',
        },
        // [theme.breakpoints.up('tablet')]: {
        //   width: '768px',
        //   padding: '0 32px',
        // },
        [theme.breakpoints.up('desktop')]: {
          width: '1280px',
          padding: '0 68px',
        },
      },
    },
  },

  MuiButton: {
    variants: [
      {
        props: { variant: 'ukrstrong' },
        style: {
          fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '9px',
          lineHeight: '0.82',
          borderRadius: '24px',
          padding: '14px 30px',
          color: theme.palette.colorList.white,
          background: theme.palette.colorList.green,
          '&:hover': {
            background: theme.palette.colorList.lightgreen,
          },
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
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '30px',
  lineHeight: '37px',
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
  fontSize: '40px',
  lineHeight: '48px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '50px',
    lineHeight: '60px',
  },
};
theme.typography.h5 = {
  margin: 0,
  fontFamily: 'Bebas',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '14px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '15px',
    lineHeight: '17px',
  },
};

export default theme;
