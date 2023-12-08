// /src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Define the theme context
const ThemeContext = createContext();

// Define the theme provider
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Define theme based on mode
  const theme = {
    mode: isDarkMode ? 'dark' : 'light',
    // Define your theme colors here
    light: {
        background: '#ffffff',
        text: '#333333',
        altColor:'#',
        toggleBackgroundColor: '#ccc',
        toggleButtonColor: '#fff',
      },
    dark: {
        background: '#333333',
        text: '#ffffff',
        altColor:'#',
        toggleBackgroundColor: '#666',
        toggleButtonColor: '#333',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  return useContext(ThemeContext);
};
