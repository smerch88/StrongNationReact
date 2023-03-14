import { styled, Button } from '@mui/material';

export const BtnCloseModal = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '13px',
  right: '0',
  padding: '0',
  background: 'transparent',
  border: 'none',

  '&:hover': {
    background: 'none',
  },
  //   [theme.breakpoints.up('desktop')]: {},
}));
