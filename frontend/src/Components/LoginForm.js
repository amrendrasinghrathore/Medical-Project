import { Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Box } from '@mui/system';
import { Stack } from '@mui/material';
import { useState } from 'react';

const formDefaultValues = {
  id: '',
  password: '',
};

const showErrorDefaultValues = {
  id: false,
  password: false,
};

const LoginForm = (props) => {
  let [formValues, setFormValues] = useState(formDefaultValues);
  let [showError, setShowError] = useState(showErrorDefaultValues);

  const formValidCheck = () => {
    let newShowError = { ...showError };

    for (const key in formValues) {
      newShowError[key] = !formValues[key];
    }

    setShowError(newShowError);
  };

  const handleSubmit = (e) => {
    formValidCheck();
  };

  const handleChange = (value, e) => {
    setFormValues({ ...formValues, [value]: e.target.value });
  };

  return (
    <>
      <Box sx={{ mt: 5 }}>
        <Stack>
          {/* Email */}
          <Typography sx={{ fontSize: '14px' }}>Email Address</Typography>
          <Typography
            color="error"
            sx={{
              fontSize: '10px',
              display: showError['id'] ? 'block' : 'none',
            }}
          >
            Please Enter an email address
          </Typography>
          <TextField
            id="id"
            label=""
            placeholder="name@mail.com"
            size="small"
            onChange={(e) => handleChange('id', e)}
            sx={{ mt: 0.5 }}
          />

          {/* Password */}
          <Typography sx={{ mt: 2.5, fontSize: '14px' }}>Password</Typography>
          <Typography
            color="error"
            sx={{
              fontSize: '10px',
              display: showError['password'] ? 'block' : 'none',
            }}
          >
            Please enter your password
          </Typography>
          <TextField
            id="password"
            type="password"
            placeholder="password"
            size="small"
            onChange={(e) => handleChange('password', e)}
            sx={{
              mt: 0.5,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="text"
                    disableRipple
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                      textTransform: 'none',
                    }}
                    onClick={(e) => {
                      document.getElementById('password').value = '';
                      setFormValues({ ...formValues, ['password']: '' });
                    }}
                  >
                    Reset Password
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" sx={{ mt: 3 }} onClick={handleSubmit}>
            <Typography sx={{ fontWeight: '200', textTransform: 'none' }}>
              Login
            </Typography>
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default LoginForm;
