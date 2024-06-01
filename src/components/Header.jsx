import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Box  sx={{ flexGrow: 1 }}>
        <AppBar style={{backgroundColor: '#c71b1b'}} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Calculator
            </Typography>
            <Link to={'/'}>
              <Button style={{color: "#fff"}} color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
