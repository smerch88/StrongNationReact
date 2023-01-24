import { Timer } from 'components/Timer/Timer';
import { NavLink } from 'react-router-dom';
import { useTheme, Typography } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  const colors = theme.palette.primary;
  console.log(colors);
  return (
    <div>
      <Typography variant="h1" color={colors.red}>
        Home page
      </Typography>
      <Timer />
      <NavLink to="/admin">ADMIN</NavLink>
    </div>
  );
};

export default Home;
