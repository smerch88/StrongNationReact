import { Container } from '@mui/material';
import { Timer } from 'components/Timer/Timer';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: '209px',
        paddingLeft: '86px',
        paddingRight: '86px',
      }}
    >
      <h1>Home page</h1>
      <Timer />
      <NavLink to="/admin">ADMIN</NavLink>
    </Container>
  );
};

export default Home;
