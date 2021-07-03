import React, { useContext } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import LayoutProvider from 'Components/layout/LayoutProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DarkModeContext } from './DarkModeProvider';

export const FancyBorder = ({ children }) => (
  <Grid container justify="space-between">
    <Grid item sm={1} />
    <Grid item xs={12} sm={10}>
      {children}
    </Grid>
    <Grid item sm={1} />
  </Grid>
);

const ThemeProvider = ({ children }) => {
  const darkModeContext = useContext(DarkModeContext);
  const { themeType } = darkModeContext;

  const theme = createMuiTheme({
    palette: {
      type: themeType,
      primary: {
        main: '#ff2e00',
      },
      secondary: {
        main: '#00BAFF',
        light: '#B2E7FF',
      },
      grey: {
        main: '#737373',
        dark: '#DFDFDF',
        light: '#F4F4F4',
      },
    },
    typography: {
      fontFamily: ['Oswald', 'sans-serif'],
    },
  });

  return (
    <LayoutProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          {children}
        </CssBaseline>
      </MuiThemeProvider>
    </LayoutProvider>
  );
};

export default ThemeProvider;
