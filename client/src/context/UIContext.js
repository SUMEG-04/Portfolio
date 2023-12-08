// /src/context/UIContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for UI-related states
const UIContext = createContext();

// Create a provider component
export const UIProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Function to toggle loading state
  const toggleLoading = () => {
    setIsLoading((prevLoading) => !prevLoading);
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen((prevModal) => !prevModal);
  };

  // Function to display a toast message
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000); // Display toast for 3 seconds
  };

  // Provide the context values to the components
  const contextValues = {
    isLoading,
    toggleLoading,
    isModalOpen,
    toggleModal,
    toastMessage,
    showToast,
  };

  return <UIContext.Provider value={contextValues}>{children}</UIContext.Provider>;
};

// Custom hook to consume the context
export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
