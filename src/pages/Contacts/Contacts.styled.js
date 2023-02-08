import { Box, Container, Link, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '31px 18px',
    margin: 0,
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
    marginBottom: '20px',
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
    marginBottom: '20px',
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
    marginBottom: '20px',
    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      marginBottom: '60px',
    },
  }));

  export const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
      marginBottom: '60px',
    },
  }));

export const ContactsTitle = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));

  export const ContactsText = styled(Typography)(({ theme }) => ({
    textTransform: 'none',
    fontStyle: 'normal',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#1F2528',
    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));

  export const ContactsValueText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));


  export const StyledLink = styled(Link)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
      display: 'inline-block',
    },
  }));



 