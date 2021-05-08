import {
  AppBar as MuiAppBar, Divider, Drawer, IconButton, List,
  makeStyles, Toolbar, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import React, { useState } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
  appBarNavItem: {
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

const titles = ['Blog', 'TIL', 'About'];

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
          >
            <MenuIcon />
          </IconButton>
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
          <IconButton edge="start" className={classes.darkMode} color="inherit" aria-label="menu">
            <Brightness3Icon />
          </IconButton>
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
          <IconButton onClick={(event) => toggleDrawer(event, false)}>
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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <DonutLargeIcon color="primary" fontSize="large" />
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            James Cook
          </Typography>
          <div className={classes.appBarNav}>
            {titles.map((text) => (
              <Typography variant="h6" className={classes.appBarNavItem} key={text}>
                {text}
              </Typography>
            ))}
          </div>
          <IconButton edge="start" className={classes.darkMode} color="inherit" aria-label="menu">
            <Brightness3Icon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
