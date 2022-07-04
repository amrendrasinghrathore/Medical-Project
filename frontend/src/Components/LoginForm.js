import {
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { Stack } from '@mui/material';

const LoginForm = (props) => {
  return (
    <Container sx={{ my: 20, width: { xs: '100%', md: '70%', lg: '60%' } }}>
      <Typography variant="h4" sx={{ fontWeight: '400' }}>
        Login
      </Typography>
      <Box sx={{ mt: 5 }}>
        <Stack>
          <Typography sx={{ fontSize: '14px' }}>Email Address</Typography>
          <TextField
            id="email-id"
            label=""
            placeholder="name@mail.com"
            size="small"
            sx={{ mt: 0.5 }}
          />
          <Typography sx={{ mt: 2.5, fontSize: '14px' }}>Password</Typography>
          <TextField
            id="password"
            type="password"
            placeholder="password"
            size="small"
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
                    }}
                  >
                    Reset Password
                  </Button>
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" sx={{ mt: 3 }}>
            <Typography sx={{ fontWeight: '200', textTransform: 'none' }}>
              Login
            </Typography>
          </Button>

          <Typography sx={{ mt: 2.5 }}>
            Don't have an account?{' '}
            <Link href="#" sx={{ textDecoration: 'None' }}>
              Sign up
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginForm;
