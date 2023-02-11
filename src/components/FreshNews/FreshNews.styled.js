import { styled } from '@mui/material';

export const NewsList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '17px',

  [theme.breakpoints.up('tablet')]: {
    marginBottom: '38px',
    flexDirection: 'row',
    gap: '24px',
  },

  [theme.breakpoints.up('desktop')]: {
    justifyContent: 'center',
    marginBottom: '54px',
    gap: '36px',
  },
}));

export const TitleBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '27px auto 11px auto',

  [theme.breakpoints.up('tablet')]: {
    justifyContent: 'space-between',
    margin: '38px auto 26px auto',
    alignItems: 'center',
  },

  [theme.breakpoints.up('desktop')]: {
    margin: '54px auto 36px auto',
    alignItems: 'center',
  },
}));
