import { styled } from '@mui/material';

export const AutoPlayContainer = styled('div')(({ theme }) => ({
  padding: 0,
  '&:first-of-type': { marginBottom: '10px' },
  [theme.breakpoints.up('tablet')]: {
    padding: 0,
    '&:first-of-type': { marginBottom: '11px' },
  },
  [theme.breakpoints.up('desktop')]: {
    padding: 0,
    '&:first-of-type': { marginBottom: '22px' },
  },
}));

export const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
