import { Container, styled } from '@mui/material';
import { ReactComponent as ReactLogo } from './pictures/header_logo.svg';

const StyledLogo = styled(ReactLogo)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    width: '152px',
    height: '67px',
  },
}));

const StyledHeader = styled('header')(({ theme }) => ({
  background: '#FFFFFF',
  opacity: '0.7',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  paddingTop: '11px',
  paddingBottom: '11px',

  padding: '30px 0',
  [theme.breakpoints.up('desktop')]: {
    paddingTop: '17px',
    paddingBottom: '18px',
  },
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLogo width="96px" height="42px" />
      </Container>
    </StyledHeader>
  );
};
