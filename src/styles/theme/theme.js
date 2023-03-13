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
      desktop: 1366,
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
      paper: 'rgba(33, 33, 33, 0.82)',
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
    overflow-x: hidden;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    letter-spacing: 1.02;
  }
  main { 
    flex-grow: 1;
    overflow-x: hidden;
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

  /* Custom Scrollbar for screens wider than 768px */
  @media screen and (min-width: 768px) {
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.5);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
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
          maxWidth: '480px',
        },
        [theme.breakpoints.up('tablet')]: {
          maxWidth: '768px',
          padding: '0 60px',
        },
        [theme.breakpoints.up('desktop')]: {
          maxWidth: '1366px',
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
          textTransform: 'uppercase',
          fontFamily: 'Bebas',
          letterSpacing: 1.02,

          fontStyle: 'normal',
          fontWeight: 400,
          borderRadius: '8px',
          padding: '10px 13px',
          fontSize: '14px',
          lineHeight: 'calc(17px/14px)',
          border: '1px solid',
          borderColor: theme.palette.colorList.grey,
          color: theme.palette.colorList.white,
          background: theme.palette.primary.main,
          '&:hover': {
            background: theme.palette.primary.light,
          },
          [theme.breakpoints.up('desktop')]: {
            fontSize: '20px',
            lineHeight: '24px',
            padding: '12px 20px',
          },
        },
      },
      {
        props: { variant: 'createNewPost' },
        style: {
          textTransform: 'uppercase',
          fontFamily: 'Bebas',
          letterSpacing: 1.02,

          fontStyle: 'normal',
          fontWeight: 400,
          borderRadius: '8px',
          padding: '10px 13px',
          fontSize: '14px',
          lineHeight: 'calc(17px/14px)',
          border: '1px solid',
          borderColor: theme.palette.colorList.grey,
          color: theme.palette.colorList.grey,
          background: 'transparent',
          '&:hover': {
            background: theme.palette.colorList.grey,
            color: theme.palette.colorList.white,
            borderColor: theme.palette.colorList.lightgrey,
          },
          [theme.breakpoints.up('desktop')]: {
            fontSize: '20px',
            lineHeight: '24px',
          },
        },
      },
      {
        props: { variant: 'navigation' },
        style: {
          margin: 0,
          padding: 0,
          fontFamily: 'Bebas',
          letterSpacing: 1.02,

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
          letterSpacing: 1.02,

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
      {
        props: { variant: 'edit' },
        style: {
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
          maxHeight: '25px',
          padding: '3px',
          border: '1px solid',
          borderColor: theme.palette.colorList.grey,
          borderRadius: '8px 8px 8px 4px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '10px',
          lineHeight: 'calc(12px/10px)',
          color: theme.palette.colorList.grey,
          stroke: theme.palette.colorList.grey,
          background: 'transparent',
          [theme.breakpoints.up('desktop')]: {
            padding: '15px',
          },
          '&:hover': {
            background: theme.palette.colorList.lightgrey,
            color: theme.palette.colorList.white,
            stroke: theme.palette.colorList.white,
            borderColor: theme.palette.colorList.lightgrey,
          },
        },
      },
      {
        props: { variant: 'favorite' },
        style: {
          minWidth: '25px',
          maxHeight: '25px',
          whiteSpace: 'nowrap',
          padding: '0px',
          border: '1px solid',
          borderColor: theme.palette.colorList.grey,
          borderRadius: '8px 8px 8px 2px',
          fontFamily: 'Arial',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '10px',
          lineHeight: 'calc(12px/10px)',
          color: theme.palette.colorList.grey,
          background: 'transparent',
          stroke: theme.palette.colorList.grey,
          [theme.breakpoints.up('desktop')]: {
            padding: '15px 5px',
          },
          '&:hover': {
            background: theme.palette.colorList.lightgrey,
            color: theme.palette.colorList.white,
            borderColor: theme.palette.colorList.lightgrey,
            stroke: theme.palette.colorList.white,
          },
        },
      },
    ],
    defaultProps: {
      variant: 'ukrstrong',
      size: 'medium',
      letterSpacing: 1.02,
    },
  },
};

//typography settings
theme.typography.body1 = {
  fontFamily: 'Arial',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: 'calc(14 / 12)',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '18px',
    lineHeight: '21px',
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: '25px',
    lineHeight: 'calc(29/25)',
  },
};
theme.typography.h1 = {
  margin: 0,
  fontFamily: 'Bebas',
  letterSpacing: 1.02,

  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: ' 30px',
  lineHeight: '1.5',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '50px',
  },
};

theme.typography.h3 = {
  margin: 0,
  fontFamily: 'Bebas',
  letterSpacing: 1.02,

  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '30px',
  lineHeight: '36px',
  [theme.breakpoints.up('tablet')]: {
    fontSize: '40px',
    lineHeight: 'calc(48px/40px)',
  },
  [theme.breakpoints.up('desktop')]: {
    fontSize: '50px',
    lineHeight: 'calc(50/60)',
  },
};
theme.typography.h4 = {
  margin: 0,
  fontFamily: 'Bebas',
  letterSpacing: 1.02,

  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '70px',
  lineHeight: '84px',
  [theme.breakpoints.up('desktop')]: {
    fontSize: '100px',
    lineHeight: 'calc(120px/100px)',
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
    lineHeight: 'calc(17px/15px)',
  },
};

export default theme;
