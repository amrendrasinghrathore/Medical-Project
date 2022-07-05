import { Container,Grid,Box,Link,Typography } from '@mui/material';
import React from 'react';


const BottomBar = () => {
  return (
    <Box position="absolute" bgcolor={"#1B2845"} color="white" px={{xs:3, sm:3}} py={{xs:3,sm:15}}>
      <Container maxWidth="xl">
        <Grid container spacing={25} >
          <Grid item xs={16} sm={4}>
            <Box>
            <Typography variant="h3" fontWeight="600" >Medic</Typography> 
            </Box>
            <Box>
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>An Extensive care for you loved ones because they deserve the best.</Typography>
            </Box>
          </Grid>
          <Grid item xs={16} sm={3} textAlign="center" >
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Ask a Doctor Online
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Chat with Doctor
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Phone a Doctor
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Video Consultation
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Online Covid-19 Care
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Book a Lab Test
              </Link>
            </Box>
          </Grid>
          <Grid item xs={16} sm={2} textAlign="center" >
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Tools
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                FAQ's
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Blogs
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Careers
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                About Us
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Terms
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Privacy
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Ads Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={16} sm={3} textAlign="center" >
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Deals and Offers
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Sysmptons Checker
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Get API
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Medical Review Team
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Support
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit" variant="caption">
                Help
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
 export default BottomBar;
        