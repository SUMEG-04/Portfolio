// src/components/admin/AdminPanel.js
import React from 'react';
import styled from 'styled-components';
import { useAdmin } from '../../../context/AdminContext';
import Dashboard from '../Dashboard/Dashboard';
import { useTheme } from '../../../context/ThemeContext';

const AdminPanelWrapper = styled.div`
  background: ${({ theme }) => theme[theme.mode].background};
  color: ${({ theme }) => theme[theme.mode].text};
  /* Add additional admin panel styles here */
`;

const AdminPanel = () => {
  const { isAdmin } = useAdmin();
  const { theme } = useTheme();

  return (
    <AdminPanelWrapper theme={theme}>
      {isAdmin ? (
        <Dashboard />
      ) : (
        <p>You are not authorized to access the admin panel.</p>
      )}
    </AdminPanelWrapper>
  );
};

export default AdminPanel;
