import { useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const AdminForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <div>
        <TextField
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
