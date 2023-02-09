import { Container, styled } from '@mui/material';

export const AutoPlayContainer = styled(Container)(({ theme }) => ({
  padding: 0,
  [theme.breakpoints.up('tablet')]: {
    padding: 0,
  },
  [theme.breakpoints.up('desktop')]: {
    padding: 0,
  },
}));

export const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
