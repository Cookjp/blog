import React from 'react';
import { motion } from 'framer-motion';

const TRANSITION_DURATION = 0.5;

const PageTransition = ({ children, key }) => (
  <motion.main
    key={key}
    initial={{ opacity: 0, x: -300 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 300 }}
    transition={{
      type: 'tween',
      duration: TRANSITION_DURATION,
    }}
  >
    {children}
  </motion.main>
);

export { TRANSITION_DURATION };
export default PageTransition;
