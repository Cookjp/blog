import React, { useContext } from 'react';
import SunIcon from '@mui/icons-material/Brightness3';
import MoonIcon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';
import { DarkModeContext } from '../layout/DarkModeProvider';

const DarkModeToggle = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { themeType, LIGHT_TYPE } = darkModeContext;
  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="dark-mode"
        onClick={() => {
          darkModeContext.toggle();
        }}
        size="large"
      >
        {themeType === LIGHT_TYPE
          ? <SunIcon /> : <MoonIcon /> }
      </IconButton>
    </>
  );
};

export default DarkModeToggle;
