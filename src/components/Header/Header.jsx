import { Box, Button, Container, styled } from '@mui/material';
import { Link } from 'react-router-dom';
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

  [theme.breakpoints.up('desktop')]: {
    paddingTop: '17px',
    paddingBottom: '18px',
    paddingLeft: '160px',
  },
}));

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledLogo width="96px" height="42px" />
          <Box>
            <Link>про нас</Link>
            <Link>Досягнення</Link>
            <Link to="/donate">
              <Button>пiдтримати</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </StyledHeader>
  );
};
