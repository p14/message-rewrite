import React from 'react';
import { Box } from '@mui/material';

const SupportButton: React.FC = () => {
  return (
    <Box sx={{ mt: 2, textAlign: 'center' }}>
      <a href='https://www.buymeacoffee.com/perezident14' target='_blank' rel='noreferrer'>
        <img
          src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
          alt='Buy Me A Coffee'
          height='60px'
          width='217px'
        />
      </a>
    </Box>
  );
};

export default SupportButton;
