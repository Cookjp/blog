import {
  AppBar as MuiAppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'gatsby';
import DarkModeToggle from './DarkModeToggle';
// styles

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  darkMode: {
    marginLeft: 'auto',
  },
  title: {
    width: '20%',
    whiteSpace: 'nowrap',
  },
  appBarNav: {
    display: 'flex',
    width: '80%',
    justifyContent: 'space-evenly',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const titles = [];

const AppBar = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return matches ? <DesktopBar /> : <MobileBar />;
};

const MobileBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (event, newOpen) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(newOpen);
  };

  return (
    <div className={classes.root}>
      <MuiAppBar
        position="static"
        color="transparent"
        display="flex"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={(event) => toggleDrawer(event, true)}
            edge="start"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <DonutLargeIcon
              color="primary"
              fontSize="large"
            />
            <Divider
              orientation="vertical"
              style={{ width: '2%' }}
            />
            <Typography variant="h5" noWrap>
              James Cook
            </Typography>
          </Link>
          <DarkModeToggle className={classes.darkMode} />
        </Toolbar>
      </MuiAppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={(event) => toggleDrawer(event, false)} size="large">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {titles.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

const DesktopBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar display="flex">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              size="large"
            >
              <DonutLargeIcon color="primary" fontSize="large" />
            </IconButton>
            <Typography variant="h3" className={classes.title}>
              James Cook
            </Typography>
          </Link>
          <div className={classes.appBarNav}>
            {titles.map((text) => (
              <Typography variant="h6" key={text}>
                {text}
              </Typography>
            ))}
          </div>
          <DarkModeToggle className={classes.darkMode} />

        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
