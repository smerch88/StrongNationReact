import { AdminForm } from 'components/AdminForm/AdminForm';
import { Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAdminRequest } from 'redux/admin/admin-operations';
import { isLoggedInSelector } from 'redux/admin/admin-selectors';

const Admin = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();

  const toLogOutAdmin = () => {
    dispatch(logOutAdminRequest());
  };

  return (
    <Container
      sx={{
        maxWidth: '1136px',
        m: '0 auto',
        padding: '32px',
        paddingTop: '140px',
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
  );
};

export default Admin;
