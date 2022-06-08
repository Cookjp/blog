import React, { createContext, useEffect, useReducer } from 'react';
import { useMediaQuery } from '@mui/material';

const DarkModeContext = createContext();

const LIGHT_TYPE = 'light';
const DARK_TYPE = 'dark';

const useToggleThemeType = (preferredType) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'reset':
        return preferredType;
      case 'toggle':
        if (state === LIGHT_TYPE) return DARK_TYPE;
        return LIGHT_TYPE;
      default:
        return LIGHT_TYPE;
    }
  };

  const [themeType, dispatchThemeType] = useReducer(reducer, preferredType);

  const handlers = React.useMemo(
    () => ({
      toggle: () => {
        dispatchThemeType({ type: 'toggle' });
      },
      reset: () => {
        dispatchThemeType({ type: 'reset' });
      },
    }),
    [],
  );

  return [themeType, handlers];
};

//  reset if OS preference changes while on page
const useResetPreference = (preferredType, reset) => {
  useEffect(() => {
    reset();
  }, [preferredType]);
};

const DarkModeProvider = ({ children }) => {
  const preferredType = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true })
    ? DARK_TYPE
    : LIGHT_TYPE;

  const [themeType, { toggle, reset }] = useToggleThemeType(preferredType);
  useResetPreference(preferredType, reset);

  return (
    <DarkModeContext.Provider value={{
      themeType, toggle, LIGHT_TYPE, DARK_TYPE,
    }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export {
  DarkModeContext,
  DarkModeProvider,
  LIGHT_TYPE, DARK_TYPE,
};
