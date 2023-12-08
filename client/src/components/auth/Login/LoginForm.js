// /src/components/auth/LoginForm.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

const LoginFormWrapper = styled.div`
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
    color: ${({ theme }) => theme.text};
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }
`;

const LoginForm = ({ onLogin }) => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    onLogin(username, password);
  };

  return (
    <LoginFormWrapper theme={theme}>
      <label>
        Username:
        <input name='username' autoComplete='off' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input name='password' autoComplete='off' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </LoginFormWrapper>
  );
};

export default LoginForm;
