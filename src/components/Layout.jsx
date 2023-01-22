import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Layout Element</h1>
      <Outlet />
    </>
  );
};
