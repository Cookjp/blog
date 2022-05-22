import React from 'react';
import { Button, Divider, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import bmc from 'Images/bmc-button.png';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '150px',
    height: '100%',
  },
}
));

const Coffee = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <footer className={classes.footer}>
        <Button
          style={{ textTransform: 'none', textDecoration: 'none' }}
          target="_blank"
          href="https://www.buymeacoffee.com/jamescook"
          size="small"
        >
          <img src={bmc} alt="Buy me a coffee" className={classes.image} />
        </Button>
      </footer>
    </>
  );
};

export default Coffee;
