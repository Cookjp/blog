/* eslint-disable import/prefer-default-export */
import React from 'react';
import AppBar from 'Components/appbar/AppBar';

import ThemeProvider, { FancyBorder } from 'Components/layout/ThemeProvider';
import { DarkModeProvider } from 'Components/layout/DarkModeProvider';

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <ThemeProvider>
      <AppBar />
      <FancyBorder>
        {element}
      </FancyBorder>
    </ThemeProvider>
  </DarkModeProvider>
);
