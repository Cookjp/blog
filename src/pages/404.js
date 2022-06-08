import * as React from 'react';
import { Link } from 'gatsby';
import { Button, Typography } from '@mui/material';
import PageTransition from '../components/layout/PageTransition';

// markup
const NotFoundPage = () => (
  <PageTransition>
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <Typography variant="h3">Sorry 😔</Typography>
      {' '}
      <Typography variant="h4">we couldn’t find what you were looking for.</Typography>
      {process.env.NODE_ENV === 'development' ? (
        <>
          <br />
          Try creating a page in
          {' '}
          <code>src/pages/</code>
          .
          <br />
        </>
      ) : null}
      <br />
      <Link to="/"><Button variant="contained" sx={{ mb: 2 }}><Typography variant="p">Go home</Typography></Button></Link>
      <br />
      {' '}
    </main>
  </PageTransition>
);

export default NotFoundPage;
