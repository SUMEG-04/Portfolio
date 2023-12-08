// /src/pages/Portfolio.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext'; // Import the useTheme hook

import PortfolioGrid from '../../components/portfolio/PortfolioGrid/PortfolioGrid';
import { useProjectContext } from '../../context/ProjectContext';

// Styled components for the Portfolio page
const PortfolioWrapper = styled.div`
  /* Add any global styles specific to the Portfolio page */
  background-color: ${({ theme }) => theme[theme.mode].background}; /* Use the theme background color */
  color: ${({ theme }) => theme[theme.mode].text}; /* Use the theme text color */
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const Portfolio = () => {
  const { theme } = useTheme(); // Use the useTheme hook to get the current theme
  const {projects}=useProjectContext()

  return (
    <PortfolioWrapper theme={theme}>
      <ContentWrapper>
        <Title theme={theme}>Portfolio</Title>
        <PortfolioGrid projects={projects}/>
        {/* Add more content as needed */}
      </ContentWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
