// /src/components/common/Header/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logoimg from '../../../assets/portfolioLogo.png';
import ThemedComponent from '../Theme/ThemedComponent';
import { useAdmin } from '../../../context/AdminContext';
import { useAuth } from '../../../context/AuthContext';

// Styled components for the Header
const HeaderWrapper = styled.header`
  background: linear-gradient(to right, #feb479, #ff7e5f);/* Gradient background */
  color: #333; /* Dark text color for the header */
  padding: 15px 0;
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #333; /* Dark text color for the header */
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  width:100px;
  align-items: center;
  margin:20px;
`;

// Styled component for the logo image
const LogoImage = styled.img`
  width: 100%; /* Adjust the width as needed */
  height: auto;
  margin-right: 10px; /* Adjust the margin as needed */
  object-fit: contain;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.2em;
  &:hover {
    border-bottom: 2px solid #333; /* Dark border color for hover effect */
  }
`;

const Header = () => {
  const {isAdmin}=useAdmin()
  const {isAuthenticated}=useAuth()
  return (
    <HeaderWrapper>
      <NavContainer>
        <Logo to="/">
          <LogoImage src={Logoimg} alt="Portfolio Logo" />
        </Logo>
        <NavList>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            {isAdmin && isAuthenticated ?<NavLink to='/admin'>Dashboard</NavLink>:<NavLink to="/login">Login/SignUp</NavLink>}
          </NavItem>
          <ThemedComponent/>
          {/* Add more navigation links as needed */}
        </NavList>
      </NavContainer>
    </HeaderWrapper>
  );
};

export default Header;
