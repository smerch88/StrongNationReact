import { Box, Button, Container, useMediaQuery } from '@mui/material';

import { Link } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import { StyledHeader, StyledLogo } from './Header.Styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const pages = [
  { name: 'новини', link: '/news' },
  { name: 'про нас', link: '/about' },
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
            {isSmallScreen && <BurgerMenu />}
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
