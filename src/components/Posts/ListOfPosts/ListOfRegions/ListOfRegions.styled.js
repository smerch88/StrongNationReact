import { styled } from '@mui/material';

export const LineTop = styled('div')(({ theme }) => ({
  width: '80%',
  height: '2px',
  background: '#748E9A',
  //   [theme.breakpoints.up('tablet')]: {
  //     width: 'calc((100% - 50px) / 3)',
  //     padding: '0 0 14px 0',
  //     overflow: 'hidden',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'space-between',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     width: 'calc((100% - 72px) / 3)',
  //   },
}));

export const WrapOfRegions = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '6px',
  paddingTop: '15px',
  //   [theme.breakpoints.up('tablet')]: {
  //     width: 'calc((100% - 50px) / 3)',
  //     padding: '0 0 14px 0',
  //     overflow: 'hidden',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'space-between',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     width: 'calc((100% - 72px) / 3)',
  //   },
}));

export const Btn = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  textTransform: 'uppercase',

  fontFamily: 'Bebas',

  fontWeight: 400,
  fontSize: '16px',
  lineHeight: 'calc(19/16)',
  cursor: 'pointer',
  color: '#1F2528',

  // '&:before': {
  //   content: '""',
  //   display: 'block',
  //   marginRight: '3px',
  //   width: '4px',
  //   height: '4px',
  //   background: '#748E9A',
  //   borderRadius: '50px',
  // },

  '&:hover': {
    color: '#748E9A',
  },
  //   [theme.breakpoints.up('tablet')]: {
  //     width: 'calc((100% - 50px) / 3)',
  //     padding: '0 0 14px 0',
  //     overflow: 'hidden',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'space-between',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     width: 'calc((100% - 72px) / 3)',
  //   },
}));

export const SpanEl = styled('span')(({ theme }) => ({
  display: 'block',
  marginRight: '3px',
  width: '4px',
  height: '4px',
  background: '#748E9A',
  borderRadius: '50px',
  //   [theme.breakpoints.up('tablet')]: {
  //     width: 'calc((100% - 50px) / 3)',
  //     padding: '0 0 14px 0',
  //     overflow: 'hidden',
  //     display: 'flex',
  //     flexDirection: 'column',
  //     justifyContent: 'space-between',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     width: 'calc((100% - 72px) / 3)',
  //   },
}));
