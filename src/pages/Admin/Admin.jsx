import { AdminForm } from 'components/AdminForm/AdminForm';
import { Container, Typography } from '@mui/material';

const Admin = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: '209px',
        paddingLeft: '86px',
        paddingRight: '86px',
      }}
    >
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
    </Container>
  );
};

export default Admin;
