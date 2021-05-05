import React from 'react';
import { Grid } from '@material-ui/core';
import Intro from '../components/Intro';

const Home = () => (
  <Grid
    container
    justify="space-evenly"
    alignItems="center"
  >
    <Grid item xs={6}>
      <Intro />
    </Grid>
    <Grid item xs={6}>
      <Intro />
    </Grid>

  </Grid>
);

export default Home;
