import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'styles/theme/theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = lazy(() => import('../pages/Home/Home'));
const NewsPage = lazy(() => import('../pages/News/News'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const SupportPage = lazy(() => import('../pages/Support/Support'));
const AdminPage = lazy(() => import('../pages/Admin/Admin'));

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};
