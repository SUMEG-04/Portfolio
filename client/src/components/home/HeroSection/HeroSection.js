// /src/components/home/HeroSection.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

const HeroSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme[theme.mode].background};
  padding: 80px 0;
  text-align: center;

  h1 {
    font-size: 3em;
    color: ${({ theme }) => theme[theme.mode].text};
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    color: ${({ theme }) => theme[theme.mode].text};
  }
`;

const HeroSection = () => {
    const {theme}=useTheme()
  return (
    <HeroSectionWrapper theme={theme}>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and skills</p>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
