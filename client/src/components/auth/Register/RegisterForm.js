// /src/components/auth/RegisterForm.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import { useAdmin } from '../../../context/AdminContext';

const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5em;
    font-size: 1.2em;
    color: ${({ theme }) => theme[theme.mode].text};
  }

  input {
    padding: 0.5em;
    font-size: 1em;
    margin-bottom: 1em;
  }

  button {
    background-color: ${({ theme }) => theme.toggleButtonColor};
    color:  ${({ theme }) => theme.text};
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
`;

const RegisterForm = ({ onRegister }) => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {admin}=useAdmin()

  const handleRegister = async () => {
    onRegister(username, password);
  };

  if(admin.authorities.stopRegistrations){
    return(
      <h3>This service has been stopped.</h3>
    )
  }

  return (
    <RegisterFormWrapper theme={theme}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </RegisterFormWrapper>
  );
};

export default RegisterForm;
