// /src/components/about/AboutMeSection/AboutMeSection.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

// Styled components for the About Me section
const AboutMeWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const SkillsList = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Skill = styled.li`
  margin: 0 15px;
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const AboutMeSection = () => {
  const { theme } = useTheme();

  return (
    <AboutMeWrapper>
      <SectionTitle theme={theme}>About Me</SectionTitle>
      <Description theme={theme}>
        Hello, I'm Sumeg Sharnagat, a passionate web developer with expertise in creating dynamic and user-friendly websites.
        I love turning ideas into reality through coding and creating meaningful digital experiences.
        My skills include but are not limited to:
      </Description>
      <SkillsList>
        <Skill theme={theme}>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React.js</Skill>
        <Skill>Node.js</Skill>
        {/* Add more skills as needed */}
      </SkillsList>
    </AboutMeWrapper>
  );
};

export default AboutMeSection;
