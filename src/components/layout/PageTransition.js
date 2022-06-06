import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, key }) => (
  <motion.main
    key={key}
    initial={{ opacity: 0, x: -300 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 300 }}
    transition={{
      type: 'tween',
      duration: 0.5,
    }}
  >
    {children}
  </motion.main>
);

export default PageTransition;
