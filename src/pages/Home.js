import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Intro from '../components/Intro';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(20),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className={classes.main}
    >
      <Grid item xs={6}>
        <Intro />
      </Grid>
      <Grid item xs={6} />

    </Grid>
  );
};

export default Home;
