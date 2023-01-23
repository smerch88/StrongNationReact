import { ReactComponent as ReactLogo } from './pictures/footer_logo.svg';
import Container from '@mui/material/Container';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <ReactLogo width="107px" height="47px" />
        <p>Сайт розроблений</p>
        <a href="/">Team Name</a>
      </Container>
    </footer>
  );
};
