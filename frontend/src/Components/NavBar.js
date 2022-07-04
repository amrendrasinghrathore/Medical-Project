import { AppBar, styled, Toolbar, Button, Typography } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  color: '#2EC4B6',
});

const CustomBtn = styled(Button)({
  display: 'flex',
  color: 'white',
  margin: '0 auto',
  justifyContent: 'center',
});

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: '#1B2845' }}>
        <StyledToolbar position="static">
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {' '}
            Medic
          </Typography>
          <CustomBtn variant="text"> Home </CustomBtn>
          <CustomBtn variant="text"> Doctors </CustomBtn>
          <CustomBtn variant="text"> Services </CustomBtn>
          <CustomBtn variant="text"> Reviews </CustomBtn>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#fc9105',
              color: 'white',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Contact Us{' '}
          </Button>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
