import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      <h1>Layout Element</h1>
      <Outlet />
      <Footer />
    </>
  );
};
