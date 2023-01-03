import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Container maxWidth='md' sx={{ justifyContent: 'center' }}>
      <Header />
      <Hero />
      {/* <Footer /> */}
    </Container>
  );
};

export default App;
