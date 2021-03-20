import React from 'react';
import { Router } from '@reach/router';
import LayoutProvider from 'Components/layout/provider';
import Home from './Home';

// markup
const IndexPage = () => (
  <LayoutProvider>
    <Router>
      <Home path="/" />
    </Router>
  </LayoutProvider>
);

export default IndexPage;
