// /src/components/about/SkillsSection/SkillsSection.js

import React from 'react';
import styled from 'styled-components';

// Styled components for the Skills section
const SkillsSectionWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  margin: 0 20px 20px 0;
  font-size: 1.5em;
  color: #333;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
`;

const SkillsSection = () => {
  return (
    <SkillsSectionWrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillsList>
        <Skill>HTML5</Skill>
        <Skill>CSS3</Skill>
        <Skill>JavaScript</Skill>
        <Skill>React.js</Skill>
        <Skill>Node.js</Skill>
        {/* Add more skills as needed */}
      </SkillsList>
    </SkillsSectionWrapper>
  );
};

export default SkillsSection;
