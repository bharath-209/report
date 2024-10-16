import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString();
  };

  return (
    <AppBar
      position="fixed"
      style={{
        background: '#616161',
        height: '64px', 
        boxShadow: 'none', 
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img
            src="https://logowik.com/content/uploads/images/law-firm2308.logowik.com.webp"
            alt="logo"
            style={{ width: '50px', height: '40px', borderRadius: '50px' }}
          />
        </IconButton>
        <Typography variant="h4" sx={{ flexGrow: 1, color: 'white' }}>
          Law Firm
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: 'white' }}>
            {formatDateTime(dateTime)}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

