// /src/pages/AboutMe.js
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import AboutMeSection from '../../components/about/AboutMeSection/AboutMeSection';
import ResumeSection from '../../components/about/ResumeSection/ResumeSection';
import SkillsSection from '../../components/about/SkillsSection/SkillsSection';

// Styled components for the AboutMe page
const AboutMeWrapper = styled.div`
  background-color: ${({ theme }) => theme[theme.mode].background};
  color: ${({ theme }) => theme[theme.mode].text};
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme[theme.mode].text} ;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode].text} ;
`;

const AboutMe = () => {
  const { theme } = useTheme();

  return (
    <AboutMeWrapper theme={theme}>
      <ContentWrapper>
        <Title theme={theme}>About Me</Title>
        <Paragraph theme={theme}>
          Welcome to my portfolio! I am a passionate web developer with expertise in creating innovative and user-friendly websites.
        </Paragraph>
        <AboutMeSection theme={theme}/>
        <ResumeSection theme={theme}/>
        <SkillsSection theme={theme}/>
      </ContentWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;
