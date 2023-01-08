import React from 'react';
import { Box, Typography } from '@mui/material';
import { footerStyles } from '../styles/generic.styles';

const Footer: React.FC = () => {
  return (
    <Box sx={footerStyles}>
      <Typography variant='caption'>
        Your message is sent to <a href='https://openai.com' target='_blank' rel='noreferrer'>OpenAI</a> who charges about $0.002 to process each request. Thank you for your support.
      </Typography>
      <Typography variant='caption'>
        Created by Joseph Perez - <a href='https://www.github.com/p14/message-rewrite' target='_blank' rel='noreferrer'>Source Code</a>
      </Typography>
    </Box>
  );
};

export default Footer;
