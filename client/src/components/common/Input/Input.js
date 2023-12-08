// /src/components/common/Input/Input.js

import React from 'react';
import styled from 'styled-components';

// Styled component for the input
const StyledInput = styled.input`
  padding: 10px;
  font-size: 1.2em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff; /* Blue color inspired by Bootstrap */
  }
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
