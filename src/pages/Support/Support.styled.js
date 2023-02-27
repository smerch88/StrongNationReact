import { Box, Container, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '31px 30px',
  margin: '0 auto',
  width: '100%',
  paddingTop: '88px',

  [theme.breakpoints.up('tablet')]: {
    padding: '51px 115px 153px 115px',
    paddingTop: '160px',
  },

  [theme.breakpoints.up('desktop')]: {
    padding: '60px 365px 72px 365px',
    paddingTop: '160px',
  },
}));

export const SupportTitle = styled(Typography)(({ theme }) => ({
  width: '200px',
  color: theme.palette.text.header,
  marginBottom: '13px',
  [theme.breakpoints.up('tablet')]: {
    width: 'auto',
    fontSize: '40px',
    marginBottom: '18px',
  },

  [theme.breakpoints.up('desktop')]: {
    fontSize: '48px',
    lineHeight: '60px',
  },
}));

export const SupportStyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  border: '1px solid #455A64',
  borderRadius: '15px',
  width: '100%',
  minHeight: '123px',
  marginTop: '18px',
  overflow: 'hidden',
  [theme.breakpoints.up('tablet')]: {},

  [theme.breakpoints.up('desktop')]: {
    width: '538px',
  },
}));

export const SupportText = styled(Typography)(({ theme }) => ({
  textTransform: 'none',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '18px',
  color: theme.palette.colorList.almostblack,
  height: 'auto',

  [theme.breakpoints.up('tablet')]: {
    fontSize: '30px',
    lineHeight: '86%',
  },

  [theme.breakpoints.up('desktop')]: {
    fontSize: '30px',
    lineHeight: '86%',
  },
}));

export const SupportCopyButton = styled('button')(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  fontSize: '22px',
  alignItems: 'center',
  color: theme.palette.colorList.grey,
  backgroundColor: 'inherit',
  border: 'none',
  transition: 'all 0.2s ease-out',
  [theme.breakpoints.up('tablet')]: {},

  [theme.breakpoints.up('desktop')]: {},
  '&:hover': {
    scale: '1.03',
    textShadow: '3px 3px 0px rgba(0, 0, 0, 0.13)',
  },
}));

export const SupportTextPhrase = styled(Typography)(({ theme }) => ({
  margin: '0',
  textTransform: 'none',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '18px',
  color: theme.palette.colorList.almostblack,
  height: 'auto',
  marginTop: '31px',
  textAlign: 'center',
  [theme.breakpoints.up('tablet')]: {
    width: '406px',
    fontSize: '22px',
    lineHeight: '25.3px',
  },

  [theme.breakpoints.up('desktop')]: {
    fontSize: '22px',
    lineHeight: '25px',
  },
}));
