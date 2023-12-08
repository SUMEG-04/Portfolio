// /src/pages/ProjectDetailPage.js

import React from 'react';
import styled from 'styled-components';
import ProjectDetail from '../../components/portfolio/ProjectDetail/ProjectDetail';

// Styled components for the ProjectDetailPage
const ProjectDetailWrapper = styled.div`
  /* Add any global styles specific to the ProjectDetailPage */
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 40px;
`;

const ProjectDetailPage = () => {
  // Sample project data (replace with your own)
  const project = {
    title: 'Project Name',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus dapibus efficitur.',
    // Add more project details as needed
  };

  return (
    <ProjectDetailWrapper>
      <ContentWrapper>
        <ProjectDetail/>
      </ContentWrapper>
    </ProjectDetailWrapper>
  );
};

export default ProjectDetailPage;
