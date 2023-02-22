import { styled } from '@mui/material';

export const MockupIconBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '7px',

  [theme.breakpoints.up('tablet')]: {
    width: '16px',
  },

  [theme.breakpoints.up('desktop')]: {
    width: '21px',
  },
}));

export const DropdownIconBox = styled('div')(({ theme }) => ({
    width: '10px',
    marginLeft: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',


  [theme.breakpoints.up('tablet')]: {
    width: '12px',
    marginLeft: '10px',
  },

  [theme.breakpoints.up('desktop')]: {
    width: '21px',
    marginLeft: '21px',
  },
}));

export const EditIconsBox = styled('div')(({ theme }) => ({
    width: '10px',
    marginLeft: '3px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',


  [theme.breakpoints.up('tablet')]: {
    width: '12px',
    marginLeft: '3px',
  },

  [theme.breakpoints.up('desktop')]: {
    width: '13px',
    marginLeft: '3px',
  },
}));
