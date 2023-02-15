import { styled } from '@mui/material';

export const SectionNews = styled('section')(({ theme }) => ({
  padding: '25px 0',

  [theme.breakpoints.up('tablet')]: {
    padding: '44px 0',
  },
  [theme.breakpoints.up('desktop')]: {
    padding: '54px 0',
  },
}));

export const Box = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '17px',
  [theme.breakpoints.up('tablet')]: {
    marginBottom: '32px',
  },
  [theme.breakpoints.up('desktop')]: {
    marginBottom: '37px',
  },
}));

export const WrapOfBtn = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '18px',
  [theme.breakpoints.up('tablet')]: {
    gap: '24px',
  },
  [theme.breakpoints.up('desktop')]: {
    gap: '41px',
  },
}));
