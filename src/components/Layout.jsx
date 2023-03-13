import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};
