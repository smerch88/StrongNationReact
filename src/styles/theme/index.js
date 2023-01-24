import { createTheme } from '@mui/material';

import '@fontsource/montserrat';
import Bebas_Neue_Cyrillic from './fonts/Bebas_Neue_Cyrillic.ttf';

const mainTheme = createTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg'],
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1240,
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
  //connecting fonts
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Bebas Neue';
          src: url(${Bebas_Neue_Cyrillic}) format('truetype');
        }
      `,
  },
  MuiContainer: {
    defaultProps: {
      sx: {
        padding: '0 16px',
        [mainTheme.breakpoints.up('xl')]: {
          padding: '0 24px',
        },
        [mainTheme.breakpoints.up('lg')]: {
          padding: '0 180px',
        },
        [mainTheme.breakpoints.up('md')]: {
          padding: '0 32px',
        },
      },
    },
  },
  MuiGrid: {
    defaultProps: {
      spacing: '24px',
    },
  },
  MuiGrid2: {
    defaultProps: {
      spacing: '24px',
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
          //   '&:disabled': {
          //     color: mainTheme.palette.colorList.wildSand,
          //     background: mainTheme.palette.colorList.boulder,
          //   },
        },
      },
    ],
    defaultProps: {
      variant: 'ukrstrong',
      size: 'medium',
    },
    // styleOverrides: {
    //   root: ({ ownerState, mainTheme }) => ({
    //     borderRadius: '16px',
    //     boxShadow: '0px 7px 12px rgba(0, 0, 0, 0.25)',
    //     height: 28,
    //     padding: '0 8px',
    //     [mainTheme.breakpoints.up('md')]: {
    //       height: 40,
    //       padding: '0 32px',
    //     },
    //     ...(ownerState.size === 'large' && {
    //       height: 40,
    //       fontSize: 14,
    //       padding: '0 16px',
    //       [mainTheme.breakpoints.up('md')]: {
    //         height: 54,
    //         fontSize: 20,
    //         padding: '0 66px',
    //       },
    //     }),
    //     ...(ownerState.size === 'small' && {
    //       height: 28,
    //       padding: '0 8px',
    //       boxShadow: 'none',
    //       [mainTheme.breakpoints.up('md')]: {
    //         height: 40,
    //         padding: '0 13px',
    //       },
    //     }),
    //   }),
    // },
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
// mainTheme.typography.h2 = {
//   fontSize: '18px',
//   fontWeight: 700,
//   [mainTheme.breakpoints.up('md')]: {
//     fontSize: '28px',
//   },
// };
// mainTheme.typography.h3 = {
//   fontSize: '16px',
//   fontWeight: 600,
//   [mainTheme.breakpoints.up('md')]: {
//     fontSize: '24px',
//   },
// };
// mainTheme.typography.button = {
//   fontSize: '14px',
//   fontWeight: 500,
//   [mainTheme.breakpoints.up('md')]: {
//     fontSize: '16px',
//   },
// };

export default mainTheme;
