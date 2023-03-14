import { styled } from '@mui/material';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '24px',
}));

export const StyledLabel = styled('label')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '14px',
}));

export const StyledInput = styled(Field)(({ theme }) => ({
  paddingBottom: '5px',
  border: 'none',
  outline: 'transparent',
  borderBottom: '1px solid #000000',
  width: '100%',
  textAlign: 'right',
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  marginBottom: '9px',
}));

export const StyledError = styled('div')(({ theme }) => ({
  color: 'red',
}));
