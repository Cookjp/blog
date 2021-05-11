/* eslint-disable import/prefer-default-export */
import React from 'react';
import AppBar from 'Components/AppBar';
import ThemeProvider, { FancyBorder } from 'Components/layout/ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <AppBar />
    <FancyBorder>
      {element}
    </FancyBorder>
  </ThemeProvider>
);
