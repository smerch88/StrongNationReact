import {
  AppBar,
  Box,
  Button,
  Container,
  styled,
  useMediaQuery,
} from '@mui/material';
import { ReactComponent as ReactLogo } from './pictures/header_logo.svg';
import { ReactComponent as Burger } from './pictures/burger.svg';
import { Link, NavLink } from 'react-router-dom';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const StyledLogo = styled(ReactLogo)(({ theme }) => ({
  [theme.breakpoints.up('desktop')]: {
    width: '152px',
    height: '67px',
  },
}));

const StyledBurger = styled(Burger)(({ theme }) => ({}));

const StyledHeader = styled(AppBar)(({ theme }) => ({
  position: 'static',

  background: '#FFFFFF',
  opacity: '0.7',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  paddingTop: '28px',
  paddingBottom: '28px',

  [theme.breakpoints.up('desktop')]: {},
}));

const pages = [
  { name: 'новини', link: '/news' },
  { name: 'про нас', link: '/aboutus' },
  { name: 'контакти', link: '/contacts' },
];

export const Header = () => {
  const isBigScreen = useMediaQuery(theme => theme.breakpoints.up('tablet'));
  const isSmallScreen = useMediaQuery(theme =>
    theme.breakpoints.down('tablet')
  );

  return (
    <ErrorBoundary>
      <StyledHeader>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link to="/">
              <StyledLogo width="96px" height="42px" />
            </Link>
            {isSmallScreen && <StyledBurger />}
            {isBigScreen && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: { tablet: '36px', desktop: '40px' },
                }}
                component="nav"
              >
                {pages.map(page => (
                  <Button
                    variant="navigation"
                    key={page.name}
                    component={Link}
                    to={page.link}
                    // onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    {page.name}
                  </Button>
                ))}
                <Button component={Link} to="/support">
                  пiдтримати
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </StyledHeader>
    </ErrorBoundary>
  );
};
