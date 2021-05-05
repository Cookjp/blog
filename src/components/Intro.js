import { Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(20),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Intro = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6">
        Hi, I&apos;m
      </Typography>
      <Typography variant="h2">
        James Cook
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6">
        and I&apos;m a
      </Typography>
      <Typography variant="h3">
        Software Developer
      </Typography>
      <Typography variant="h6">
        I like to write about software engineering, personal development
        and my own philosophical and mental experiences.
      </Typography>
    </div>
  );
};

export default Intro;
