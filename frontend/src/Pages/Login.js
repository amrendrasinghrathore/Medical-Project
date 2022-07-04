import React from 'react';
import { Grid } from '@mui/material';

import LoginForm from '../Components/LoginForm.js';

const Login = (props) => {
  return (
    <Grid container>
      <Grid
        item
        sm={6}
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        Image
      </Grid>
      <Grid
        item
        sm={6}
        sx={{
          mx: { xs: 'auto' },
        }}
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
