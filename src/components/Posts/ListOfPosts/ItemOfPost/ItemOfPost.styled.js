import { styled } from '@mui/material';

export const LiElement = styled('li')(({ theme }) => ({
  padding: '10px 10px 8px 13px',
  border: '1px solid #455A64',
  borderRadius: '17px',
  //   [theme.breakpoints.up('tablet')]: {
  //     marginTop: '0 62px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     margin: '0 62px',
  //   },
}));

export const ImgElement = styled('img')(({ theme }) => ({
  width: '114px',
  borderRadius: '10px',
  //   [theme.breakpoints.up('tablet')]: {
  //     marginTop: '0 62px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     margin: '0 62px',
  //   },
}));

export const PElement = styled('p')(({ theme }) => ({
  margin: '0',
  //   [theme.breakpoints.up('tablet')]: {
  //     marginTop: '0 62px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     margin: '0 62px',
  //   },
}));

export const WrapOfLink = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '7px',
  //   [theme.breakpoints.up('tablet')]: {
  //     marginTop: '0 62px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     margin: '0 62px',
  //   },
}));

export const LinkElement = styled('a')(({ theme }) => ({
  display: 'block',
  width: '150px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  //   [theme.breakpoints.up('tablet')]: {
  //     marginTop: '0 62px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     margin: '0 62px',
  //   },
}));
