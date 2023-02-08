import { Outlet } from 'react-router-dom';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import HeaderNew from './Header/HeaderNew';

export const Layout = () => {
  return (
    <>
      {/* <HeaderNew /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
