/* eslint-disable import/prefer-default-export */
import React from 'react';
import AppBar from 'Components/appbar/AppBar';

import ThemeProvider, { FancyBorder } from 'Components/layout/ThemeProvider';
import { DarkModeProvider } from 'Components/layout/DarkModeProvider';
import { AnimatePresence } from 'framer-motion';
import Coffee from 'Components/BuyMeACoffee';
import { TRANSITION_DURATION } from 'Components/layout/PageTransition';

const ReactDOM = require('react-dom');

// https://github.com/gatsbyjs/gatsby/issues/17676
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#replaceHydrateFunction
// fixes incorrect css classes on first render
export const replaceHydrateFunction = () => (element, container, callback) => {
  ReactDOM.render(element, container, callback);
};

// delays scroll until PageTransition has completed, smooth scrolls back to top
export const shouldUpdateScroll = () => {
  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, TRANSITION_DURATION * 1000 * 2);
  return false;
};

export const wrapPageElement = ({ element }) => (
  <FancyBorder>
    <AnimatePresence exitBeforeEnter>
      {element}
    </AnimatePresence>
    <Coffee />
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
