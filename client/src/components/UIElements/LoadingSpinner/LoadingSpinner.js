// /src/components/common/LoadingSpinner/LoadingSpinner.js

import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the spinner animation
const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Styled components for the Loading Spinner
const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff; /* Blue color inspired by Bootstrap */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${rotate360} 1s linear infinite;
`;

const LoadingSpinner = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
