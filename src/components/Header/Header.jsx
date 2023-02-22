import {
  Box,
  Button,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { Link } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { StyledHeader, StyledLogo } from './Header.Styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const pages = [
  { name: 'новини', link: '/news' },
  { name: 'головна', link: '/' },
  { name: 'контакти', link: '/contacts' },
];

export const Header = () => {
  const isBigScreen = useMediaQuery(theme => theme.breakpoints.up('tablet'));
  const isSmallScreen = useMediaQuery(theme =>
    theme.breakpoints.down('tablet')
  );
  const theme = useTheme();

  return (
    <ErrorBoundary>
      <StyledHeader sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link to="/" alt="Хоробра Україна">
              <StyledLogo width="96px" height="42px" />
            </Link>
            <Toolbar>{isSmallScreen && <BurgerMenu />} </Toolbar>
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
                <Button
                  component={Link}
                  to="/support"
                  sx={{ paddingLeft: '22px' }}
                >
                  пiдтримати
                  <TrendingFlatIcon sx={{ marginLeft: '10px' }} />
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </StyledHeader>
    </ErrorBoundary>
  );
};
