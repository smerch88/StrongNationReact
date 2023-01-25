import { Container, Link, Typography } from '@mui/material';
import { ReactComponent as ReactLogo } from './pictures/footer_logo.svg';

export const Footer = () => {
  return (
    <footer>
      <Container>
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
