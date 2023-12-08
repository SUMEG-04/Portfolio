// /src/pages/Home.js

import React from 'react';
import styled from 'styled-components';

// Import necessary components
import HeroSection from '../../components/home/HeroSection/HeroSection';
import FeaturedProjects from '../../components/home/FeaturedProjects/FeaturedProjects';
import Testimonials from '../../components/home/Testimonials/Testimonials';
import Footer from '../../components/common/Footer/Footer';
import { useTheme } from '../../context/ThemeContext';
import { useProjectContext } from '../../context/ProjectContext';
import LoadingSpinner from '../../components/UIElements/LoadingSpinner/LoadingSpinner';

// Styled components for the Home page
const HomeWrapper = styled.div`
  /* Add any global styles specific to the Home page */
  background:${({ theme }) => theme[theme.mode].background};
  color:${({ theme }) => theme[theme.mode].text};
  display:grid;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;
 const Loading=styled.p`
  margin:10px auto;`

const Home = () => {
    const {theme}=useTheme()
    const {projects}=useProjectContext()

    
  return (
    <HomeWrapper theme={theme}>
      <HeroSection />
      {!projects || !Array.isArray(projects) || projects.length === 0?(
        <>
          <Loading>Loading...</Loading>
          <LoadingSpinner />
        </>
      ):(<ContentWrapper>
      {projects.map((project, index) => (
        project.feature ? <FeaturedProjects key={index} project={project} /> : null
      ))}
      </ContentWrapper>)}
      {/* <Testimonials /> */}
    </HomeWrapper>
  );
};

export default Home;
