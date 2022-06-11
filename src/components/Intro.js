import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { motion } from 'framer-motion';
import { TRANSITION_DURATION } from 'Components/layout/PageTransition';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    width: '65%',
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
          James Edwards-Cook
        </Box>
      </Typography>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 1.2,
          delay: TRANSITION_DURATION + 0.5,
        }}
      >
        <Divider className={classes.divider} />
      </motion.div>
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
