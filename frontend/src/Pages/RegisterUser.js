import React from 'react';
import { Grid, Container, Typography, Link } from '@mui/material';

import RegisterUserForm from '../Components/RegisterUserForm';

const RegisterUser = (props) => {
  return (
    <Grid container>
      <Grid
        item
        sm={6}
        sx={{
          mx: { xs: 'auto' },
        }}
      >
        <Container sx={{ mt: 10, width: { xs: '100%', md: '70%', lg: '60%' } }}>
          <Typography variant="h4" sx={{ fontWeight: '400' }}>
            Register
          </Typography>
          <RegisterUserForm />
          <Typography sx={{ mt: 2.5 }}>
            Want to register as a doctor?{' '}
            <Link href="#" sx={{ textDecoration: 'None' }}>
              Click here
            </Link>
          </Typography>
        </Container>
      </Grid>

      <Grid
        item
        sm={6}
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
      >
        Image
      </Grid>
    </Grid>
  );
};

export default RegisterUser;
