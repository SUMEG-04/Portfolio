// /src/components/portfolio/FeaturedProject/FeaturedProject.js
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

// Styled components for the Featured Project
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
const ProjectCard = styled.div`
  /* Add styles for the project card */
  background-color: ${({ theme }) => theme[theme.mode]?.background || 'inherit'};
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow:3px 3px 10px ${({ theme }) => theme[theme.mode]?.color};
  transition:0.2s;

  &:hover{
    cursor:pointer;
    transform:scale(1.02);
  }
`;

const ImageContainer = styled.div`
  margin:10px;
  padding:5px;
  width: 90%;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  zoom:100%;
  border-radius:10px;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
  margin-bottom: 10px;
`;


const FeaturedProject = ({ project }) => {
  const { theme } = useTheme();
  const navigate=useNavigate()
  
  
  return (
    <ProjectWrapper theme={theme}>
      <ProjectCard onClick={()=>{console.log(project._id);navigate(`/project/${project._id}`)}} theme={theme}>
        <ImageContainer>
          <Image src={'http://localhost:3000/images/'+project.image} alt={project.title} />
        </ImageContainer>
        <ProjectContent>
          <ProjectTitle>{project.title}</ProjectTitle>
        </ProjectContent>
      </ProjectCard>
    </ProjectWrapper>
  );
};

export default FeaturedProject;
