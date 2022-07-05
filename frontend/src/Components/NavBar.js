import {
  AppBar,
  styled,
  Toolbar,
  Button,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  color: '#2EC4B6',
  margin: '0',
});

const CustomBtn = styled(Button)({
  fontSize: { xs: '8px', sm: '14px' },
  display: 'flex',
  color: 'white',
  margin: '0 auto',
  justifyContent: 'center',
});

const NavBar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: '#1B2845' }} position="sticky">
        <StyledToolbar
          sx={{ justifyContent: { xs: 'center', sm: 'space-between' } }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight="600"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {' '}
              Medic
            </Typography>
          </Box>
          <Stack direction="row">
            <CustomBtn disableTouchRipple variant="text">
              <Typography sx={{ fontSize: { xs: '10px', sm: '14px' } }}>
                Home
              </Typography>
            </CustomBtn>
            <CustomBtn disableTouchRipple variant="text">
              <Typography sx={{ fontSize: { xs: '10px', sm: '14px' } }}>
                Doctors
              </Typography>
            </CustomBtn>
            <CustomBtn disableTouchRipple variant="text">
              <Typography sx={{ fontSize: { xs: '10px', sm: '14px' } }}>
                Services
              </Typography>
            </CustomBtn>
            <CustomBtn disableTouchRipple variant="text">
              <Typography sx={{ fontSize: { xs: '10px', sm: '14px' } }}>
                Reviews
              </Typography>
            </CustomBtn>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fc9105',
                color: 'white',
                display: { xs: 'none', sm: 'block' },
                ml: 3,
              }}
            >
              Contact Us{' '}
            </Button>
          </Stack>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
