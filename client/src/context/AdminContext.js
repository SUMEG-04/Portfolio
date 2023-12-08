// /src/context/AdminContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api'; // Adjust the path based on your project structure
import { useAuth } from './AuthContext';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admins, setAdmins] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const [admin, setAdmin] = useState({
    // Initial admin data
    // ...
    authorities: {
      stopRegistrations: true,
      denyAccess: false,
      // Add more authorities here
    },
  });

  const getAllAdmins = async () => {
    try {
      const adminData = await api.admin.getAllAdmins();
      setAdmins(adminData);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const addNewAdmin = async (adminData) => {
    try {
      await api.admin.addNewAdmin(adminData);
      // After adding a new admin, refresh the admin list
      getAllAdmins();
    } catch (error) {
      console.error('Error adding new admin:', error);
    }
  };

  const isAdmin = currentUser?.role === 'admin' || currentUser?.role === 'superadmin';

  useEffect(() => {{
      getAllAdmins();
      // Fetch the current user on component mount
      // This assumes you have a separate function to get the current user
      api.admin.getCurrentAdmin().then((user) => setCurrentUser(user));
    }
  }, []); 


  const adminContextValue = {
    admins,
    addNewAdmin,
    isAdmin,
    admin,
    getAllAdmins,
    setCurrentUser,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
