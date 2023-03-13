import { AppBar, styled } from '@mui/material';
import { ReactComponent as Burger } from './pictures/burger.svg';
import { ReactComponent as ReactLogo } from './pictures/header_logo.svg';

export const StyledLogo = styled(ReactLogo)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    width: '156px',
    height: '53px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '152px',
    height: '67px',
  },
}));

export const StyledBurger = styled(Burger)(({ theme }) => ({}));

export const StyledHeader = styled(AppBar)(({ theme }) => ({
  position: 'absolute',

  background: 'rgba(255, 255, 255, 1)', // opacity: '0.7',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  zIndex: theme.zIndex.drawer + 1,

  [theme.breakpoints.up('tablet')]: {
    paddingTop: '24px',
    paddingBottom: '24px',
  },
}));
