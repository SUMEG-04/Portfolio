// /src/components/portfolio/PortfolioGrid/PortfolioGrid.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../UIElements/LoadingSpinner/LoadingSpinner';

// Styled components for the PortfolioGrid
const GridWrapper = styled.div`
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

const PortfolioGrid = ({projects}) => {
  const {theme}=useTheme()
  const navigate=useNavigate()

  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return (
      <>
        <ProjectDescription>Loading...</ProjectDescription>
        <LoadingSpinner />
      </>
    );
  }
  

  return (
    <GridWrapper>
      {projects?.map((project, index) => (
        <ProjectCard onClick={()=>{console.log(project._id);navigate(`/project/${project._id}`)}} theme={theme} key={index}>
          <ImageContainer>
            <Image src={'http://localhost:3000/images/'+project.image} alt={`Project: ${project.title}`} />
          </ImageContainer>
          <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
          {/* Add more project details or links as needed */}
        </ProjectCard>
      ))}
    </GridWrapper>
  );
};

export default PortfolioGrid;
