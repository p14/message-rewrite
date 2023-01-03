import React from 'react';
import { Box, Typography } from '@mui/material';
import { descriptionStyles, headingStyles } from '../styles/generic.styles';

const Header: React.FC = () => {
  return (
    <Box>
      <Typography variant='h1' sx={headingStyles}>
        Message Rewrite
      </Typography>
      <Typography variant='body1' sx={descriptionStyles}>
        Rewrite your message with a different style as a text or email.
      </Typography>
    </Box>
  );
};

export default Header;
