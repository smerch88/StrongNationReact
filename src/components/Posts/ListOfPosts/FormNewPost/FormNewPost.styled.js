import { styled } from '@mui/material';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  //   [theme.breakpoints.up('desktop')]: {},
}));

export const StyledLabel = styled('label')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  //   [theme.breakpoints.up('desktop')]: {},
}));

export const StyledInput = styled(Field)(({ theme }) => ({
  paddingBottom: '5px',
  marginBottom: '14px',
  border: 'none',
  outline: 'transparent',
  borderBottom: '1px solid #000000',
  width: '100%',
  //   [theme.breakpoints.up('desktop')]: {},
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  marginBottom: '9px',
  //   [theme.breakpoints.up('desktop')]: {},
}));
