import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { ThemeProvider } from '@mui/material';
import theme from 'styles/theme/theme';

const HomePage = lazy(() => import('../pages/Home'));
const DonatePage = lazy(() => import('../pages/Donate'));
const AdminPage = lazy(() => import('../pages/Admin'));

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
