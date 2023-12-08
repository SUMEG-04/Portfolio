// /src/context/UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for user-related states
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User data, initially set to null for unauthenticated state

  // Function to handle user login
  const login = (userData) => {
    setUser(userData);
    // You can also implement any other login-related logic here
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    // You can also implement any other logout-related logic here
  };

  // Provide the context values to the components
  const contextValues = {
    user,
    login,
    logout,
  };

  return <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>;
};

// Custom hook to consume the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
