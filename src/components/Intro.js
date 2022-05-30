import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: '60%',
  },
  animationWidthX: {
    animation: `$widthX 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes widthX': {
    '0%': {
      width: 0,
    },
    '100%': {
      width: '60%',
    },
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
      <Divider className={clsx(classes.divider, classes.animationWidthX)} />
      <Typography variant="h6">
        and I&apos;m a
      </Typography>
      <Typography variant="h3">
        Software Developer.
      </Typography>
      <Typography variant="h6">
        I like to write about software engineering, personal development
        and my own experiences.
      </Typography>
    </div>
  );
};

export default Intro;
