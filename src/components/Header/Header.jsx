import {
  AppBar,
  Box,
  Button,
  Container,
  styled,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './pictures/header_logo.svg';
import { ReactComponent as Burger } from './pictures/burger.svg';

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

  paddingTop: '11px',
  paddingBottom: '11px',

  [theme.breakpoints.up('desktop')]: {
    paddingTop: '17px',
    paddingBottom: '18px',
    paddingLeft: '160px',
  },
}));

const pages = ['Products', 'Pricing', 'Blog'];

export const Header = () => {
  const isBigScreen = useMediaQuery(theme => theme.breakpoints.up('tablet'));
  const isSmallScreen = useMediaQuery(theme =>
    theme.breakpoints.down('tablet')
  );

  return (
    <StyledHeader>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledLogo width="96px" height="42px" />
          {isSmallScreen && <StyledBurger />}
          {isBigScreen && (
            // <Box>
            //   <Link sx={{ marginRight: '36px' }}>новини</Link>
            //   <Link>про нас</Link>
            //   <Link>контакти</Link>
            //   <Link to="/donate">
            //     <Button>пiдтримати</Button>
            //   </Link>
            // </Box>
            <Box sx={{ flexGrow: 1 }}>
              {pages.map(page => (
                <Button
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </StyledHeader>
  );
};
