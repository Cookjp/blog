import React, { useContext } from 'react';
import SunIcon from '@material-ui/icons/Brightness3';
import MoonIcon from '@material-ui/icons/Brightness7';
import { IconButton } from '@material-ui/core';
import { DarkModeContext } from '../layout/DarkModeProvider';

const DarkModeToggle = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { themeType, LIGHT_TYPE } = darkModeContext;
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="dark-mode"
        onClick={() => {
          darkModeContext.toggle();
        }}
      >
        {themeType === LIGHT_TYPE
          ? <SunIcon /> : <MoonIcon /> }
      </IconButton>
    </>

  );
};

export default DarkModeToggle;
