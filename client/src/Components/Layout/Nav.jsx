import React from 'react';
import { Box, Tab } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link as RouterLink } from 'react-router-dom';

const Nav = () => (
  <Box component="nav" className="sidebar">
    <Tab
      style={{
        flexDirection: 'row',
      }}
      label="Profile"
      data-testid="profile-tab"
      to="/profile"
      component={RouterLink}
      iconPosition="end"
      icon={<AccountCircleIcon />}
    />
  </Box>
);
export default Nav;
