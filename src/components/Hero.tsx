import React from 'react';
import { LoadingButton } from '@mui/lab';
import { Box, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createEmail, createText } from '../services/ai.service';
import { buttonWrapperStyles, formContentStyles, messageStyles, radioControlStyles, radioGroupStyles } from '../styles/hero.styles';
import { FormDetails, MessageType } from '../typings/hero.typings';
import Message from './Message';
import { SwitchAccessShortcut } from '@mui/icons-material';

const Hero: React.FC = () => {
  const control = <Radio />;
  const options = [
    'Noble Knight',
    'Pirate',
    'Witch',
    'Mad Scientist',
    'Cowboy',
  ];

  const [loading, setLoading] = React.useState<boolean>(false);
  const [messageType, setMessageType] = React.useState<MessageType>(MessageType.TEXT);
  const [newMessage, setNewMessage] = React.useState<string>('');

  const handleSubmit = async (values: FormDetails) => {
    setLoading(true);

    let parsedMessage;
    if (messageType === MessageType.EMAIL) {
      parsedMessage = await createEmail(values);
    } else {
      parsedMessage = await createText(values);
    }

    setNewMessage(parsedMessage);
    setLoading(false);
  };
  
  const handleSwitchType = () => {
    if (messageType === MessageType.EMAIL) {
      setMessageType(MessageType.TEXT);
    } else {
      setMessageType(MessageType.EMAIL);
    }
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string().required(),
    style: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: { message: '', style: '' },
    validationSchema,
    onSubmit: (values: FormDetails) => handleSubmit(values),
  });

  return (
    <>
      <Box component='form' onSubmit={formik.handleSubmit}>
        <Box sx={formContentStyles}>
          <FormControl error={formik.touched.style && Boolean(formik.errors.style)} sx={radioControlStyles}>
            <FormLabel>Style</FormLabel>
            <RadioGroup
              defaultValue='female'
              name='style'
              sx={radioGroupStyles}
              value={formik.values.style}
              onChange={formik.handleChange}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={control}
                  label={option}
                  value={option.toLowerCase()}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <TextField
            error={formik.touched.message && Boolean(formik.errors.message)}
            label='Message'
            multiline
            name='message'
            placeholder='Type your message here...'
            rows={10}
            sx={messageStyles}
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </Box>

        <Box sx={buttonWrapperStyles}>
          <IconButton onClick={() => handleSwitchType()}>
            <SwitchAccessShortcut />
          </IconButton>
          &nbsp;
          <LoadingButton loading={loading} sx={{ width: '175px' }} type='submit' variant='contained'>
            Rewrite as {messageType === MessageType.EMAIL ? MessageType.EMAIL : MessageType.TEXT}
          </LoadingButton>
        </Box>
      </Box>

      {newMessage &&
        <Message message={newMessage} />
      }
    </>
  );
};

export default Hero;
