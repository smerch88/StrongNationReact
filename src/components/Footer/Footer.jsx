import { Container, Link, Typography, useTheme } from '@mui/material';
import { ReactComponent as ReactLogo } from './pictures/footer_logo.svg';

export const Footer = () => {
  const mainTheme = useTheme();
  console.log(mainTheme.breakpoints);
  return (
    <footer>
      <Container
        maxWidth="sm"
        sx={{
          paddingLeft: '86px',
          paddingRight: '86px',
        }}
      >
        <ReactLogo width="107px" height="47px" />
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '8px',
            lineHeight: '10px',
          }}
        >
          Сайт розроблений
        </Typography>
        <Typography
          component={Link}
          href="/"
          sx={{
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '8px',
            lineHeight: '10px',
          }}
        >
          Team Name
        </Typography>
      </Container>
    </footer>
  );
};
