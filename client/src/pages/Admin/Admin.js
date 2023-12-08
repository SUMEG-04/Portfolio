// /src/pages/Admin.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext'; // Import the useTheme hook

// Import necessary components
import AdminPanel from '../../components/admin/AdminPanel/AdminPanel';
import { LogOut } from 'lucide-react'; 
import { useAuth } from '../../context/AuthContext';

// Styled components for the Admin page
const AdminWrapper = styled.div`
  background-color: ${({ theme }) => theme[theme.mode].background}; /* Use the theme background color */
  color: ${({ theme }) => theme[theme.mode].text}; /* Use the theme text color */
  /* Add any other global styles specific to the Admin page */
`;

const HeadingWrapper=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin:auto 5px;
`;


const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: color:${({ theme }) => theme[theme.mode].text};
  margin: 20px;
`;

const Admin = () => {
  const { theme } = useTheme(); // Use the useTheme hook to get the current theme

  const {logout}=useAuth();

  const handleLogout = () => {
    // Call the logout function from your authentication context
    logout();
    // You can also add additional logic here, such as redirecting to the login page
  };

  return (
    <AdminWrapper theme={theme}>
      <HeadingWrapper>
        <Title theme={theme}>Admin Panel</Title>
        <LogOut style={{margin: 20,cursor:"pointer",}} onClick={handleLogout}/>
      </HeadingWrapper>
      <ContentWrapper>
        <AdminPanel />
        {/* Add more content and details about the admin panel */}
      </ContentWrapper>
    </AdminWrapper>
  );
};

export default Admin;
