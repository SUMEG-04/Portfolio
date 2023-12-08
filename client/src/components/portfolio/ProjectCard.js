import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ProjectTitle = styled.h3`
  font-size: 1.5em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'}
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
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

const ProjectCard = (project) => {
  const {theme}=useTheme()
  const navigate=useNavigate()

  return (
    <ProjectCard onClick={()=>{console.log(project._id);navigate(`/project/${project._id}`)}} theme={theme}>
          <ImageContainer>
            <Image src={'http://localhost:3000/images/'+project.image} alt={`Project: ${project.title}`} />
          </ImageContainer>
          <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
          {/* Add more project details or links as needed */}
    </ProjectCard>
  )
}

export default ProjectCard
