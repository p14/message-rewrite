import React from 'react';
import { Container } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import SupportButton from './components/SupportButton';
import { containerStyles } from './styles/generic.styles';

const App: React.FC = () => {
  return (
    <Container maxWidth='md' sx={containerStyles}>
      <Header />
      <Hero />
      <SupportButton />
      <Footer />
    </Container>
  );
};

export default App;
