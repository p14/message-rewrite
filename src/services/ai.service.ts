import { FormDetails } from '../typings/hero.typings';

const parseResponse = async (response: Response) => {
  const data = await response.json();
  const [ message ] = data.choices;
  const parsedMessage = String(message.text).trim();
  return parsedMessage;
};

export const createText = async (details: FormDetails) => {
  const parameters = {
    model: 'text-davinci-003',
    prompt: `Write a text message that states ${details.message} the way a ${details.style} would say it.`,
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

export const createEmail = async (details: FormDetails) => {
  const parameters = {
    model: 'text-davinci-003',
    prompt: `Write an email that states ${details.message} the way a ${details.style} would say it.`,
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
