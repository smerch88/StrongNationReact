import { styled } from '@mui/material';

export const Circle = styled('li')(({ theme }) => ({
  borderRadius: '50%',
  width: '122px',
  height: '122px',

  background: ' rgba(69, 90, 100, 0.7);',
  border: '1px solid #FFFFFF',

  textAlign: 'center',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const CirclesUl = styled('ul')(({ theme }) => ({
  display: 'flex',
  overflowX: 'scroll',
  gap: '12px',
  padding: '32px 10px',
}));
