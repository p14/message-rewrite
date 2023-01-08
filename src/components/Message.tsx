import React from 'react';
import { ContentCopy } from '@mui/icons-material';
import { Box, ClickAwayListener, IconButton, TextField, Tooltip, Typography } from '@mui/material';

interface MessageProps {
  message: string
};

const Message = ({ message }: MessageProps) => {
  const [copied, setCopied] = React.useState<boolean>(false);

  const copy = () => {
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const copyTitle = (
    <Typography variant='caption'>
      Copied
    </Typography>
  );

  const endAdornment = (
    <ClickAwayListener onClickAway={() => setCopied(false)}>
      <Tooltip open={copied} onClose={() => setCopied(false)} arrow disableFocusListener disableHoverListener disableTouchListener title={copyTitle}>
        <IconButton onClick={() => copy()}>
          <ContentCopy />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );

  return (
    <Box sx={{ marginY: 5 }}>
      <TextField
        disabled
        fullWidth
        label='New Message'
        multiline
        sx={{
          '& .MuiInputBase-input.Mui-disabled': {
            WebkitTextFillColor: 'black',
          },
          '& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-disabled': {
            color: 'rgba(0, 0, 0, 0.6)',
          }
        }}
        value={message}
        InputProps={{ endAdornment: endAdornment }}
      />
    </Box>
  );
};

export default Message;
