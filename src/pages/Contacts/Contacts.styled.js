import { Box, Container, Link, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '31px 18px',
  margin: '0 auto',
  width: '100%',
  paddingTop: '88px',

  [theme.breakpoints.up('tablet')]: {
    padding: '51px 59px',
    paddingTop: '160px',
  },
}));

// paddingTop: '88px',
// [theme.breakpoints.up('tablet')]: {
//   paddingTop: '160px',
// },
// [theme.breakpoints.up('desktop')]: {
//   paddingTop: '160px',
// },

export const SmallStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop: '20px',

  [theme.breakpoints.up('tablet')]: {
    marginTop: '30px',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'column',
    marginBottom: '17px',
    marginTop: '0px',
    alignItems: 'flex-start',
  },
}));

export const MiddleStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginBottom: '25px',

  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'column',
    width: '454px',
    paddingRight: '30px',
    marginBottom: '0px',
  },
}));

export const BigStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    marginTop: '45px',
    marginBottom: '45px',
  },
}));

export const ContactsTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.header,
  [theme.breakpoints.up('tablet')]: {
    fontSize: '40px',
  },

  [theme.breakpoints.up('desktop')]: {
    fontSize: '50px',
    lineHeight: '60px',
  },
}));

export const ContactsText = styled(Typography)(({ theme }) => ({
  textTransform: 'none',
  fontStyle: 'normal',
  fontSize: '20px',
  lineHeight: '23px',
  color: theme.palette.colorList.almostblack,

  [theme.breakpoints.up('tablet')]: {
    fontSize: '18px',
    lineHeight: '21px',
    width: '300px',
  },

  [theme.breakpoints.up('desktop')]: {
    fontSize: '22px',
    lineHeight: '25px',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textTransform: 'none',
  fontStyle: 'normal',
  fontSize: '18px',
  lineHeight: '21px',
  color: theme.palette.colorList.almostblack,
  width: '100%',
  textDecoration: 'none',
  transition: 'all 0.2s ease-out',

  [theme.breakpoints.up('tablet')]: {
    width: '275px',
    fontSize: '20px',
    lineHeight: '23px',
  },

  [theme.breakpoints.up('desktop')]: {
    fontSize: '25px',
    lineHeight: '29px',
    width: '100%',
  },
  '&:hover': {
    scale: '1.03',
    textShadow: '3px 3px 0px rgba(0, 0, 0, 0.13)',
  },
}));

export const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '20px',
  height: 'auto',
  [theme.breakpoints.up('tablet')]: {
    margin: '0px',
  },
  [theme.breakpoints.up('desktop')]: {
    marginTop: '17px',
  },
}));

export const SvgBox = styled('div')(({ theme }) => ({
  marginRight: '16px',
  minWidth: '42px',
  minHeight: '42px',
  maxWidth: '42.1px',
  maxHeight: '42.1px',
  [theme.breakpoints.up('tablet')]: {
    minWidth: '32px',
    minHeight: '32px',
    maxWidth: '32.1px',
    maxHeight: '32.1px',
    marginRight: '20px',
  },
  [theme.breakpoints.up('desktop')]: {
    minWidth: '50px',
    minHeight: '50px',
    maxWidth: '50.1px',
    maxHeight: '50.1px',
    marginRight: '20px',
  },
}));
