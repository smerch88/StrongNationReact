import { styled } from '@mui/material';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '98%',
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'scroll',
};

export const Ul = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'center',
  gap: '8px',
  marginBottom: '24px',
}));
