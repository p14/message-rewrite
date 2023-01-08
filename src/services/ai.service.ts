import { FormDetails, MessageType } from '../typings/hero.typings';

const parseResponse = async (response: Response) => {
  const data = await response.json();
  const [ message ] = data.choices;
  const parsedMessage = String(message.text).trim();
  return parsedMessage;
};

interface CreateMessageProps {
  details: FormDetails
  messageType: MessageType
};

export const createMessage = async (props: CreateMessageProps) => {
  const { details, messageType } = props;

  let prompt = '';
  if (messageType === MessageType.EMAIL) {
    prompt = `Write an email that states ${details.message} the way a ${details.style} would say it.`;
  } else {
    prompt = `Write a text message that states ${details.message} the way a ${details.style} would say it.`;
  }

  const parameters = {
    model: 'text-davinci-003',
    prompt,
    max_tokens: 2048,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPEN_AI_SECRET}`
    },
    body: JSON.stringify(parameters),
  };

  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  return parseResponse(response);
};
