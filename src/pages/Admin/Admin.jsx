import { useDispatch, useSelector } from 'react-redux';

import { Button, Container, Typography } from '@mui/material';

import theme from 'styles/theme/theme';
import { AdminForm } from 'components/AdminForm/AdminForm';
import { isLoggedInSelector } from 'redux/admin/admin-selectors';
import { logOutAdminRequest } from 'redux/admin/admin-operations';

import { AdminSection } from './Admin.styled';

const Admin = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();

  const toLogOutAdmin = () => {
    dispatch(logOutAdminRequest());
  };

  return (
    <AdminSection>
      <Container
        sx={{
          maxWidth: '280px',
          m: '0 auto',
          padding: '15px 20px 0px 20px',
          background: 'rgba(224, 215, 215, 0.9)',
          borderRadius: '20px',
          textAlign: 'center',
          [theme.breakpoints.up('tablet')]: {
            maxWidth: '617px',
            padding: '46px 86px 0px 86px',
          },
        }}
      >
        {!isLoggedIn && (
          <>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                mb: '32px',
              }}
            >
              Вхід
            </Typography>
            <AdminForm />
          </>
        )}
        {isLoggedIn && (
          <div>
            <Typography variant="h2" component="h2" sx={{}}>
              Ви увійшли як адмін
            </Typography>
            <Button
              onClick={toLogOutAdmin}
              size="large"
              type="button"
              sx={{
                width: '200px',
                mt: '30px',
              }}
            >
              Вийти
            </Button>
          </div>
        )}
      </Container>
    </AdminSection>
  );
};

export default Admin;
