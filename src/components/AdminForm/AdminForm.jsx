import { useState } from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import { Box, Button, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { loginAdminRequest } from 'redux/admin/admin-operations';

export const AdminForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(loginAdminRequest(formData));
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <div>
        <TextField
          onChange={e => setEmail(e.target.value)}
          required
          label="Email"
          name="email"
          type="email"
          margin="normal"
          fullWidth
          variant="standard"
        />
      </div>
      <div>
        <TextField
          onChange={e => setPassword(e.target.value)}
          required
          label="Пароль"
          name="password"
          margin="normal"
          fullWidth
          variant="standard"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button
        size="large"
        type="submit"
        sx={{
          mt: '62px',
          mb: '31px',
        }}
      >
        Продовжити
      </Button>
    </Box>
  );
};
