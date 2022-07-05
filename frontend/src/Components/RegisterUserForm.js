import { Typography, TextField, Button, Link } from '@mui/material';

import { Box, Container } from '@mui/system';
import { Stack } from '@mui/material';
import { useState } from 'react';

import BasicAlert from './BasicAlert';

const axios = require('axios').default;

const formdefaultValues = {
  id: '',
  password: '',
  firstname: '',
  lastname: '',
};

const showErrorDefaultValues = {
  id: false,
  password: false,
  confirmPassword: false,
  name: false,
};

const RegisterUserForm = (props) => {
  let [isConfirmCorrect, setIsConfirmCorrect] = useState(false);
  let [formValues, setFormValues] = useState(formdefaultValues);
  let [showError, setShowError] = useState(showErrorDefaultValues);
  let [registerResponse, setRegisterResponse] = useState({
    success: '',
    message: '',
  });
  let [showAlert, setShowAlert] = useState(false);

  const formVaildCheck = (e) => {
    checkPassword(e);

    let newShowError = { ...showError };

    if (!isConfirmCorrect) {
      newShowError['confirmPassword'] = true;
    } else {
      newShowError['confirmPassword'] = false;
    }

    if (!formValues['id']) {
      newShowError['id'] = true;
    } else {
      newShowError['id'] = false;
    }

    if (!formValues['password']) {
      newShowError['password'] = true;
      document.getElementById('confirm-password').value = '';
    } else {
      newShowError['password'] = false;
    }

    if (!formValues['firstname']) {
      newShowError['name'] = true;
    } else {
      if (!formValues['lastname']) {
        newShowError['name'] = true;
      } else newShowError['name'] = false;
    }

    setShowError({ ...newShowError });
  };

  const handleSubmit = async (e) => {
    formVaildCheck(e);
    let isValid = true;
    for (const key in formValues) {
      if (!formValues[key]) isValid = false;
    }

    if (!isValid) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3005/register-user',
        formValues
      );

      if (response.data.success) {
        setRegisterResponse({
          success: 'success',
          message: 'User created - Procced to login',
        });
        setShowAlert(true);
      } else {
        setRegisterResponse({
          success: 'error',
          message: 'User Already exists',
        });
        setShowAlert(true);
      }
    } catch (err) {
      console.error(`Registeration Failed error: ${err}`);
    }
  };

  const handleChange = (value, e) => {
    setFormValues({ ...formValues, [value]: e.target.value });
  };

  const checkPassword = (e) => {
    const password = document.getElementById('password').value;
    if (document.getElementById('confirm-password').value !== password) {
      setIsConfirmCorrect(false);
    } else {
      setIsConfirmCorrect(true);
    }
  };

  return (
    <Container sx={{ mt: 10, width: { xs: '100%', md: '70%', lg: '60%' } }}>
      <Typography variant="h4" sx={{ fontWeight: '400' }}>
        Register
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Stack>
          {/* email input */}
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
            sx={{ mt: 0.5 }}
            onChange={(e) => handleChange('id', e)}
          />

          {/* Password input */}
          <Typography sx={{ mt: 2.5, fontSize: '14px' }}>Password</Typography>
          <Typography
            color="error"
            sx={{
              fontSize: '10px',
              display: showError['password'] ? 'block' : 'none',
            }}
          >
            Please Enter a password
          </Typography>
          <TextField
            id="password"
            type="password"
            placeholder="password"
            size="small"
            sx={{
              mt: 0.5,
            }}
            onChange={(e) => handleChange('password', e)}
          />

          {/* Confirm password */}
          <Typography sx={{ mt: 2.5, fontSize: '14px' }}>
            Confirm Password
          </Typography>
          <Typography
            color="error"
            sx={{
              fontSize: '10px',
              display: showError['confirmPassword'] ? 'block' : 'none',
            }}
          >
            Password did not match
          </Typography>
          <TextField
            id="confirm-password"
            type="password"
            placeholder="confirm password"
            size="small"
            sx={{
              mt: 0.5,
            }}
            color={isConfirmCorrect ? 'success' : 'error'}
            onChange={checkPassword}
          />

          {/* Name Input */}
          <Stack direction="row" spacing={1}>
            {/* First Name */}
            <Stack direction="column">
              <Typography sx={{ mt: 2.5, fontSize: '14px' }}>
                First Name
              </Typography>
              <Typography
                color="error"
                sx={{
                  fontSize: '10px',
                  display: showError['name'] ? 'block' : 'none',
                }}
              >
                Please Enter your name
              </Typography>
              <TextField
                id="firstname"
                placeholder="John"
                size="small"
                sx={{
                  mt: 0.5,
                }}
                onChange={(e) => handleChange('firstname', e)}
              />
            </Stack>

            {/* Last Name */}
            <Stack direction="column">
              <Typography sx={{ mt: 2.5, fontSize: '14px' }}>
                Last Name
              </Typography>
              <Typography
                sx={{
                  fontSize: '10px',
                  display: showError['name'] ? 'block' : 'none',
                  color: 'transparent',
                }}
              >
                Please Enter your last name
              </Typography>
              <TextField
                id="lastname"
                placeholder="Doe"
                size="small"
                sx={{
                  mt: 0.5,
                }}
                onChange={(e) => handleChange('lastname', e)}
              />
            </Stack>
          </Stack>

          <Button variant="contained" sx={{ mt: 3 }} onClick={handleSubmit}>
            <Typography sx={{ fontWeight: '200', textTransform: 'none' }}>
              Register
            </Typography>
          </Button>

          <Typography sx={{ mt: 2.5 }}>
            Want to register as a doctor?{' '}
            <Link href="#" sx={{ textDecoration: 'None' }}>
              Click here
            </Link>
          </Typography>
        </Stack>
      </Box>

      {showAlert && (
        <Link href="#" sx={{ textDecoration: 'none' }}>
          <BasicAlert
            severity={registerResponse.success}
            message={registerResponse.message}
          />
        </Link>
      )}
    </Container>
  );
};

export default RegisterUserForm;
