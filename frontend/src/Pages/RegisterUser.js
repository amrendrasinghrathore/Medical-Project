import React from 'react';
import { Grid } from '@mui/material';

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
        <RegisterUserForm />
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
