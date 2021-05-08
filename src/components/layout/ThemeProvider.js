import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LayoutProvider from 'Components/layout/LayoutProvider';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff2e00',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: ['Oswald', 'sans-serif'],
  },
});

export const FancyBorder = ({ children }) => (
  <Grid container justify="space-between">
    <Grid item sm={2} />
    <Grid item xs={12} sm={8}>
      {children}
    </Grid>
    <Grid item sm={2} />
  </Grid>
);

const ThemeProvider = ({ children }) => (
  <LayoutProvider>
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  </LayoutProvider>
);

export default ThemeProvider;
