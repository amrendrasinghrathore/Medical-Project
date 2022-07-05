import React from 'react';
import { Grid, Typography, Container, Link } from '@mui/material';

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
        <Container sx={{ mt: 20, width: { xs: '100%', md: '70%', lg: '60%' } }}>
          <Typography variant="h4" sx={{ fontWeight: '400' }}>
            Login
          </Typography>
          <LoginForm />
          <Typography sx={{ mt: 2.5 }}>
            Don't have an account?{' '}
            <Link href="/register-user" sx={{ textDecoration: 'None' }}>
              Sign up
            </Link>
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Login;
