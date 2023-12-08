// /src/components/portfolio/ProjectDetail/ProjectDetail.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLink } from 'react-icons/ai';
import { NavLink, useParams } from 'react-router-dom';
import api from '../../../services/api';

// Styled components for the Project Detail
const ProjectDetailWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
`;

const ProjectTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1.4em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: #007bff; /* Blue color inspired by Bootstrap */
  font-size: 1.2em;
  display: flex;
  align-items: center;
  margin-right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3; /* Darker blue on hover */
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

const Technology=styled.div`
  font-size:1.5rem;
`

const ProjectDetail = () => {
  const {id}=useParams()
  const [project,setProject]=useState(null)

  useEffect(()=>{
    const getProject=async()=>{
      try{
        const project=await api.project.getProjectbyId(id)
        setProject(project)
      }
      catch(err){
        console.log(err)
      }
    }
    getProject()
  },[id])

  if (!project) {
    return <div>Loading...</div>; // You can customize the loading state as needed
  }

  
  return (
    <ProjectDetailWrapper>
      <ImageContainer>
            <Image src={'http://localhost:3000/images/'+project.image} alt={`Project: ${project.title}`} />
      </ImageContainer>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <Technology>Technologies: {project.technologies}</Technology>
      <ProjectDescription>Role: {project.role}</ProjectDescription>
      <ProjectDescription>Project Duration: {project.timeline}</ProjectDescription>
      <Technology><NavLink to={`${project.projectlink}`}>Project Link</NavLink></Technology>
      <ProjectLinks>
        {/* <ProjectLink href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          <AiOutlineLink style={{ marginRight: '5px' }} />
          Live Demo
        </ProjectLink> */}
      </ProjectLinks>
    </ProjectDetailWrapper>
  );
};

export default ProjectDetail;
