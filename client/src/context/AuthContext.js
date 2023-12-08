// /src/context/AuthContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api'; // Import your api.js file
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate()

  const login = async (username, password) => {
    try {
      const credentials = { username, password };
      const user = await api.admin.login(credentials);

      // Update local storage with user information
      localStorage.setItem('Token', user.token);

      setUser(user);
      setIsLoggedIn(true);
      return user;
    } catch (error) {
      throw error;
    }
  };


  const register = async (username, password) => {
    try {
      const credentials = { username, password };
      // Call the appropriate function for registration from your api
      const response = await api.admin.addNewAdmin(credentials);
      return response;
    } catch (error) {
      throw error; // Propagate the error for handling in the Register component
    }
  };

  const logout = async () => {
    try {
      // Clear user information from local storage
      localStorage.removeItem('Token');

      setUser(null);
      setIsLoggedIn(false);

      // Navigate to the login page after logout
      navigate('/login');
    } catch (error) {
      throw error;
    }
  };


  useEffect(() => {
    
    validateToken()
  }, [setUser, setIsLoggedIn]);

  const validateToken = () => {
    const token = localStorage.getItem('Token');
  
    if (!token) {
      setIsLoggedIn(false);
      setUser(null);
      return;
    }
  
    fetch('http://localhost:3000/api/protected/protected', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          localStorage.removeItem('Token');
          setIsLoggedIn(false);
          setUser(null);
          return null;
        }
      })
      .then((userData) => {
        if (userData) {
          setUser(userData.user);
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error('Error validating token:', error);
      });
  };
  

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isLoggedIn,user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
