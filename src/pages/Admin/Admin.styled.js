import { styled } from '@mui/material';

export const AdminSection = styled('div')(({ theme }) => ({
  paddingTop: '176px',
  paddingBottom: '176px',
  [theme.breakpoints.up('tablet')]: {
    paddingTop: '311px',
    paddingBottom: '311px',
  },
}));
