import React from 'react';
import { Box, Typography } from '@mui/material';
import { descriptionStyles } from '../styles/generic.styles';

const Footer: React.FC = () => {
  return (
    <Box>
      <Typography variant='body1' sx={descriptionStyles}>
        Created by Joseph Perez - <a href='https://www.github.com/p14/message-rewrite' target='_blank' rel='noreferrer'>Source Code</a>
      </Typography>
    </Box>
  );
};

export default Footer;
