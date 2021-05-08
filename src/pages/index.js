import React from 'react';
import { Router } from '@reach/router';
import AppBar from 'Components/AppBar';
import ThemeProvider, { FancyBorder } from 'Components/layout/ThemeProvider';
import Home from './Home';

// markup
const Index = () => (
  <ThemeProvider>
    <AppBar />
    <FancyBorder>
      <Router>
        <Home path="/" />
      </Router>
    </FancyBorder>
  </ThemeProvider>
);

export default Index;
