// /src/pages/Skills.js

import React from 'react';
import styled from 'styled-components';


// Styled components for the Skills page
const SkillsWrapper = styled.div`
  /* Add any global styles specific to the Skills page */
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

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 10px;
`;

const Skills = () => {
  // Sample skills data (replace with your own)
  const skills = ['React', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'Express.js'];

  return (
    <SkillsWrapper>
      <ContentWrapper>
        <Title>Skills</Title>
        <SkillList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillList>
        {/* Add more content and details about your skills */}
      </ContentWrapper>
    </SkillsWrapper>
  );
};

export default Skills;
