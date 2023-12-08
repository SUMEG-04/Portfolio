// /src/context/ProjectContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

// Create the context
const ProjectContext = createContext();

// Create a provider component
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  // Function to select a project
  const selectProject = (projectId) => {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await api.project.getAllProjects();
        setProjects(projectsData || {});
        
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [projects]);

  return (
    <ProjectContext.Provider value={{ projects,setProjects, selectedProject, addProject, selectProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook to use the project context
export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }

  return context;
};
