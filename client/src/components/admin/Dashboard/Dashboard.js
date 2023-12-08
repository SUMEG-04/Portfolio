// src/components/admin/Dashboard.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import { useAdmin } from '../../../context/AdminContext';
import api from '../../../services/api';
import AddProject from '../AddProject/AddProject';
import AddBlog from '../AddBlog/AddBlog';
import { PlusCircle, Presentation,GanttChartSquare } from 'lucide-react';
import PostSection from '../../Post/PostSection/PostSection';
import { useAuth } from '../../../context/AuthContext';
import { useProjectContext } from '../../../context/ProjectContext';
import { useBlogContext } from '../../../context/BlogContext';
import AdminList from '../Admins/AdminList';
import ToastNotification from '../../UIElements/ToastNotification/ToastNotification';
import AdminControl from '../AdminControl/AdminControl';

const DashboardWrapper = styled.div`
  background: ${({ theme }) => theme[theme.mode].background};
  color: #000;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
`;

const Heading = styled.h2`
  color: #000;
`;

const DashboardButton = styled.button`
  background:none;
  color: #000;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  justify-content:space-evenly;
  min-height:400px;
`;

const DashboardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* Spread the content horizontally */
  width: 100%;
  height:100%;
`;

const PostComponent = styled.div`
  width:100%;
  border-radius:2%;
  display: flex;
  flex-direction: row;
  align-items: center; /* Center the content horizontally */
  justify-content:space-around;
`;
const PostSections=styled.div`
width:70%;
height:100%;
margin:5px;
`
const PostUpload=styled.div`
  width:150px;
  padding:10px;
  height:80%;
  background:#38A3A5;
  border-radius:2%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  justify-content:space-evenly;
`

const ProjectBlock=styled.div`
  width:125px;
  height:125px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  background:#C7F9CC;
  padding:5px;
  justify-content:space-evenly;
  border-radius:5%;
`
const BlogBlock=styled.div`
  width:125px;
  height:125px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  background:#80ED99;
  padding:5px;
  justify-content:space-evenly;
  border-radius:5%;
`

const Icon = styled.div`
  margin: 10px;
  align-self:flex-start;
`;

const ProjectSection = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center; /* Center the content horizontally */
  justify-content:space-evenly;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  margin-bottom: 10px;
  p{
    margin:0;
  }
  h4{
    margin:0;
  }
`;

const Dashboard = () => {
  const { theme } = useTheme();
  const { isAdmin } = useAdmin();
  const [showAddProject, setShowAddProject] = useState(false);
  const [showAddBlog, setShowAddBlog] = useState(false);

  const {projects,setProjects}=useProjectContext();
  const {blogs,setBlogs}=useBlogContext();

  const [notification, setNotification] = useState({ message: '', show: false });

  const handleAddProject = async (projectData) => {
    try {
      const response=await api.project.addNewProject(projectData);
      setNotification({ message: response.message, show: true });
      // Add additional logic, such as showing a success message
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

  const handleAddBlogPost = async (blogData) => {
    try {
      const response=await api.blog.addNewBlogPost(blogData);
      setNotification({ message: response.message, show: true });
      // Add additional logic, such as showing a success message
    } catch (error) {
      console.error('Error adding blog post:', error.message);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      if (type === 'projects') {
        // Call the API to delete a project
        const response=await api.project.deleteProject(id);
        setNotification({ message: response.message, show: true });
      } else if (type === 'blogs') {
        // Call the API to delete a blog
        const response=await api.blog.deleteBlogPost(id);
        setNotification({ message: response.message, show: true });
      }

      // Fetch updated data after deletion
      const updatedProjectsData = await api.project.getAllProjects();
      const updatedBlogsData = await api.blog.getAllBlogPosts();

      setProjects(updatedProjectsData);
      setBlogs(updatedBlogsData);
    } catch (error) {
      console.error('Error deleting post:', error.message);
    }
  };

  const closeNotification = () => {
    setNotification({ message: '', show: false });
  };

  //console.log(blogs)

  return (
    <DashboardWrapper theme={theme}>
      {isAdmin ? (
        <DashboardContainer>
          <DashboardSection>
            <PostComponent>
              <PostSections>
                <PostSection projects={projects} blogs={blogs} onDelete={handleDelete} />
              </PostSections>
              <PostUpload>
                {showAddProject ? (
                  <AddProject setShowAddProject={setShowAddProject} onAddProject={handleAddProject} showConfirmation={showAddProject} />
                  
                ) : (
                  <ProjectBlock>
                    <Icon>
                      <Presentation />
                    </Icon>
                    <ProjectSection>
                      <ProjectInfo>
                        <p>{Object.keys(projects).length}</p>
                        <h4>Projects</h4>
                      </ProjectInfo>
                      <DashboardButton theme={theme} onClick={() => setShowAddProject(true)}>
                        <PlusCircle />
                      </DashboardButton>
                    </ProjectSection>
                  </ProjectBlock>
                )}
                {showAddBlog ? (
                  <AddBlog setShowAddBlog={setShowAddBlog} onAddBlogPost={handleAddBlogPost} />
                ) : (
                  <BlogBlock>
                    <Icon>
                      <GanttChartSquare/>
                    </Icon>
                    <ProjectSection>
                        <ProjectInfo>
                        <p>{Object.keys(blogs).length}</p>
                         <h4>Blogs</h4>
                        </ProjectInfo>
                        <DashboardButton theme={theme} onClick={() => setShowAddBlog(true)}>
                          <PlusCircle />
                        </DashboardButton>
                    </ProjectSection>
                  </BlogBlock>
                )}
              </PostUpload>
            </PostComponent>
          </DashboardSection>
          <DashboardSection>
            <AdminList/>
          </DashboardSection>
          <DashboardSection>
            <AdminControl/>
          </DashboardSection>
          {/* Notification Component */}
          {notification.show && <ToastNotification message={notification.message} onClose={closeNotification} />}
        </DashboardContainer>
      ) : (
        <p>You are not authorized to access the admin dashboard.</p>
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
