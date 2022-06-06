/* eslint-disable import/prefer-default-export */
import React from 'react';
import AppBar from 'Components/appbar/AppBar';

import ThemeProvider, { FancyBorder } from 'Components/layout/ThemeProvider';
import { DarkModeProvider } from 'Components/layout/DarkModeProvider';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
  <FancyBorder>
    <AnimatePresence exitBeforeEnter>
      {element}
    </AnimatePresence>
  </FancyBorder>
);

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <ThemeProvider>
      <AppBar />
      {element}
    </ThemeProvider>
  </DarkModeProvider>
);
