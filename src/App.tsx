import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { containerStyles } from './styles/generic.styles';

const App: React.FC = () => {
  return (
    <Container maxWidth='md' sx={containerStyles}>
      <Header />
      <Hero />
      <Footer />
    </Container>
  );
};

export default App;
