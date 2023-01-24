import { Timer } from 'components/Timer/Timer';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Timer />
      <NavLink to="/admin">ADMIN</NavLink>
    </div>
  );
};

export default Home;
