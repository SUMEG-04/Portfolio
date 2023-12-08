// /src/pages/Resume.js

import React from 'react';
import styled from 'styled-components';

// Styled components for the Resume page
const ResumeWrapper = styled.div`
  /* Add any global styles specific to the Resume page */
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

const ResumeSection = styled.div`
  margin-bottom: 40px;
`;

const ResumeTitle = styled.h3`
  font-size: 1.8em;
  color: #333;
  margin-bottom: 10px;
`;

const ResumeItem = styled.div`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 10px;
`;

const Resume = () => {
  return (
    <ResumeWrapper>
      <ContentWrapper>
        <Title>Resume</Title>
        <ResumeSection>
          <ResumeTitle>Education</ResumeTitle>
          <ResumeItem>Master of Computer Science - University XYZ (Year)</ResumeItem>
          {/* Add more education details */}
        </ResumeSection>
        <ResumeSection>
          <ResumeTitle>Work Experience</ResumeTitle>
          <ResumeItem>Web Developer at Company ABC (Year)</ResumeItem>
          {/* Add more work experience details */}
        </ResumeSection>
        {/* Add more resume sections as needed */}
      </ContentWrapper>
    </ResumeWrapper>
  );
};

export default Resume;
