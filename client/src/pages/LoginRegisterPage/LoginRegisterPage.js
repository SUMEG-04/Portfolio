// /src/pages/LoginRegisterPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/auth/Login/LoginForm';
import RegisterForm from '../../components/auth/Register/RegisterForm';
import { useAuth } from '../../context/AuthContext'; // Assuming you have an AuthContext
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import api from '../../services/api';

const LoginRegisterPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:${({theme})=>theme[theme.mode].background};
  min-height:60vh;
`;

const Heading=styled.h2`
color:${({theme})=>theme[theme.mode].text};
`

const ButtonContainer = styled.div`
  margin:20px;
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;


const LoginRegisterPage = () => {
  const { login, register, isAuthenticated } = useAuth(); // Replace with your actual AuthContext functions

  const {setCurrentUser,getAllAdmins}=useAdmin()

  const [activeForm, setActiveForm] = useState('login');

  const {theme}=useTheme()

  const navigate = useNavigate();

  const handleLogin = async (username, password) =>{
    try {
      // Implement login functionality using your AuthService
      const {message, token} = await login(username, password);

      // Display the success message
      alert(message);

      // Save the token in localStorage
      localStorage.setItem('Token', token);

      await getAllAdmins();
      const currentUser = await api.admin.getCurrentAdmin();
      setCurrentUser(currentUser);
      // Redirect to the dashboard or the desired route
      navigate('/admin'); // Replace '/dashboard' with your actual dashboard route
    } catch (error) {
      // Handle login error (e.g., show error message)
      console.error('Login error:', error.message);
    }
  };


  const handleRegister = async (username, password) => {
    try {
      // Implement register functionality using your AuthService
      const response = await register(username, password);

      if (response && response.message) {
        // Display the success message
        alert(response.message);
      }
    } catch (error) {
      // Handle registration error (e.g., show error message)
      console.error('Registration error:', error.message);
    }
  };

  const switchToLoginForm = () => {
    setActiveForm('login');
  };

  const switchToRegisterForm = () => {
    setActiveForm('register');
  };

  useEffect(() => {
    setTimeout(()=>{
      if (isAuthenticated) {
        navigate("/admin");
      }
    },1000)
  }, [isAuthenticated]);                  

  return (
    <LoginRegisterPageWrapper theme={theme}>
      <ButtonContainer>
        <Button onClick={switchToLoginForm}>Login</Button>
        <Button onClick={switchToRegisterForm}>Register</Button>
      </ButtonContainer>

      {activeForm === 'login' ? (
        <>
          <Heading theme={theme}>Login</Heading>
          <LoginForm onLogin={handleLogin} />
        </>
      ) : (
        <>
          <Heading theme={theme}>Register</Heading>
          <RegisterForm onRegister={handleRegister} />
        </>
      )}
    </LoginRegisterPageWrapper>
  );
};

export default LoginRegisterPage;
