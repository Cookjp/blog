import React from 'react';
import { Router } from '@reach/router';
import Home from './Home';
// styles

// markup
const IndexPage = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default IndexPage;
