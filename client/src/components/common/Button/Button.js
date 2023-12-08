// /src/components/common/Button/Button.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the button
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #007bff; /* Blue color inspired by Bootstrap */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Light blue focus border */
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
