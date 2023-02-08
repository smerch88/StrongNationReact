import { Box, Container, Link, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '31px 18px',
    margin: '0 auto',
width: '100%',
    [theme.breakpoints.up('tablet')]: {
      padding: '51px 59px',
    },

    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      marginBottom: '60px',
    },
  }));

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
      backgroundColor: 'red',
      width: '100%'
    },

    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      marginBottom: '60px',
    },
  }));

  export const MiddleStyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: '25px',

    [theme.breakpoints.up('tablet')]: {

    },

    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      marginBottom: '60px',
    },
  }));

export const BigStyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.up('tablet')]: {

    },

    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      marginBottom: '60px',
    },
  }));

  export const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '20px',

    [theme.breakpoints.up('tablet')]: {
      margin: '0px',
    },
  }));

export const ContactsTitle = styled(Typography)(({ theme }) => ({


  [theme.breakpoints.up('tablet')]: {
    fontSize: '40px',
  },

    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
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
      width: '300px'
    },

    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));

  export const ContactsValueText = styled(Typography)(({ theme }) => ({
    padding: '0',
    width: '80%',
    textAlign: 'start',
    textTransform: 'none',
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: theme.palette.colorList.almostblack,
    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));


  export const StyledLink = styled(Link)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: theme.palette.colorList.almostblack,
    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));


  export const SvgBox = styled('div')(({ theme }) => ({
    marginRight: '16px',
    width: '42px',
    height: '42px',
    [theme.breakpoints.up('tablet')]: {
      width: '32px',
      height: '32px',
    },
  }));


