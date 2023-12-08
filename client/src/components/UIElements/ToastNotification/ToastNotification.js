// ToastNotification.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ToastContainer = styled.div`
  background: #28a745;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-in-out;
`;

const ToastNotification = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ToastWrapper>
      {isVisible && (
        <ToastContainer>
          {message}
        </ToastContainer>
      )}
    </ToastWrapper>
  );
};

export default ToastNotification;