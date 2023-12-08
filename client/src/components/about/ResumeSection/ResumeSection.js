// /src/components/about/ResumeSection/ResumeSection.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

// Styled components for the Resume section
const ResumeSectionWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 20px;
`;

const JobTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
  margin-bottom: 10px;
`;

const CompanyName = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const DateRange = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const ResumeSection = () => {
  const { theme } = useTheme();

  return (
    <ResumeSectionWrapper>
      <SectionTitle theme={theme}>Resume</SectionTitle>
      <ExperienceList>
        <ExperienceItem>
          <JobTitle theme={theme}>Web Developer</JobTitle>
          <CompanyName theme={theme}>ABC Company</CompanyName>
          <DateRange theme={theme}>January 2020 - Present</DateRange>
          {/* Add more details about the job responsibilities and achievements */}
        </ExperienceItem>
        <ExperienceItem>
          <JobTitle>Front-end Developer</JobTitle>
          <CompanyName>XYZ Agency</CompanyName>
          <DateRange>June 2018 - December 2019</DateRange>
          {/* Add more details about the job responsibilities and achievements */}
        </ExperienceItem>
        {/* Add more experience items as needed */}
      </ExperienceList>
    </ResumeSectionWrapper>
  );
};

export default ResumeSection;
