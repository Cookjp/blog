import { Box, Divider, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: '60%',
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
        <Box fontWeight="fontWeightBold">
          James Cook
        </Box>
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="h6">
        and I&apos;m a
      </Typography>
      <Typography variant="h3">
        Software Developer.
      </Typography>
      <Typography variant="h6">
        I like to write about software engineering, personal development
        and my own philosophical and mental experiences.
      </Typography>
    </div>
  );
};

export default Intro;
