import { Configuration, OpenAIApi } from 'openai';
import { FormDetails } from '../typings/hero.typings';

const configuration = new Configuration({
  organization: process.env.REACT_APP_OPEN_AI_ORGANIZATION,
  apiKey: process.env.REACT_APP_OPEN_AI_SECRET,
});

const OpenAI = new OpenAIApi(configuration);

export const createText = async (details: FormDetails) => {
  return OpenAI.createCompletion({
    model: 'text-davinci-003',
    prompt: `Write a text message that states ${details.message} the way a ${details.style} would say it.`,
    max_tokens: 2048,
  });
};

export const createEmail = async (details: FormDetails) => {
  return OpenAI.createCompletion({
    model: 'text-davinci-003',
    prompt: `Write an email that states ${details.message} the way a ${details.style} would say it.`,
    max_tokens: 2048,
  });
};
