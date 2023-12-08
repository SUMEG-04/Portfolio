// src/components/admin/PostSection.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import {Pointer, Trash} from 'lucide-react'
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { useBlogContext } from '../../../context/BlogContext';

const SectionWrapper = styled.div`
  margin: 10px;
  background:#E5E5E5;
  padding:10px;
  border-radius:10px;
  height:100%;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
`;

const ToggleButton = styled.button`
  border-bottom: ${({ $active }) => ($active ? '5px solid #00B4D8' : '5px solid #E5E5E5')};
  border-top: none;
  border-right: none;
  border-left: none;
  color: #000;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  background: none;
  font-size: 14px;
  font-weight: bold;
  transition: 0s;
`;


const PostBlock = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-evenly;
  margin-top: 10px;
  border-radius: 8px;
  margin:10px;
  margin-bottom:15px;
  padding:5px;
  background:#fff;
  box-shadow:1px 2px 3px rgba(0,0,0,0.7);
`;

const ImageContainer = styled.div`
  margin:10px;
  padding:5px;
  width: 70px;
  height: 70px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  zoom:100%;
  border-radius:10px;
`;

const TextContainer = styled.div`
  padding: 10px;
  width:60%;
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const Description = styled.p`
  margin-top: 5px;
`;

const ViewSection=styled.div`
   height:70%;
   overflow:auto;
`

const ForwardedToggleButton = React.forwardRef(({ active, ...props }, ref) => (
  <ToggleButton $active={active} ref={ref} {...props} />
));


const PostSection = ({ projects, blogs, onDelete }) => {
    const {theme}=useTheme()
  const [activeTab, setActiveTab] = useState('projects');
  const {fetchData}=useBlogContext()

  const navigate=useNavigate()

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [idToDelete, setidToDelete] = useState(null);

  const openConfirmation = (Id) => {
    setidToDelete(Id);
    setShowConfirmation(true);
  };

  const closeConfirmation = () => {
    setidToDelete(null);
    setShowConfirmation(false);
  };

  const confirmDeletion = (content) => {
    if (idToDelete) {
      onDelete(content, idToDelete);
      closeConfirmation();
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  useEffect(()=>{
    fetchData()
  },[projects,blogs])

  const renderPosts = () => {
    if (activeTab === 'projects') {
      return (
        <>
          {projects?.map((project) => (
          <PostBlock onClick={()=>{navigate(`/project/${project._id}`)}} key={project._id}>
            <ImageContainer>
              <Image src={'http://localhost:3000/images/'+project.image} alt={`Project: ${project.title}`} />
            </ImageContainer>
            <TextContainer>
              <Title>{project.title}</Title>
              <Description>{project.description.slice(0,99)}</Description>
            </TextContainer>
            <Trash style={{ cursor: "pointer" }} onClick={() => openConfirmation(project._id)} />
          </PostBlock>
        ))}
        {/* Confirmation Modal */}
        <ConfirmationModal
        showConfirmation={showConfirmation}
        onConfirm={()=>confirmDeletion('projects')}
        onCancel={closeConfirmation}
      />
      </>
      )
    } else if (activeTab === 'blogs') {
      return (
        <>
            {blogs.map((blog) => (
              <PostBlock key={blog._id} onClick={()=>{navigate(`/blogpost/${blog._id}`)}}>
                {/* <ImageContainer>
                  <Image src={blog.imageUrl} alt={`Blog: ${blog.title}`} />
                </ImageContainer> */}
                <TextContainer>
                  <Title>{blog.title}</Title>
                  <Description>{blog.content.para}</Description>
                </TextContainer>
                <Trash style={{ cursor: "pointer" }} onClick={() => openConfirmation(blog._id)} />
              </PostBlock>
            ))}
          <ConfirmationModal
            showConfirmation={showConfirmation}
            onConfirm={()=>confirmDeletion('blogs')}
            onCancel={closeConfirmation}
          />
        </>
      )
    }
    return null;
  };

  return (
    <SectionWrapper>
      <Heading>Posts</Heading>
        <ButtonGroup>
          <ForwardedToggleButton
            theme={theme}
            onClick={() => handleTabChange('projects')}
            active={activeTab === 'projects'}
          >
            Projects
          </ForwardedToggleButton>
          <ForwardedToggleButton
            theme={theme}
            onClick={() => handleTabChange('blogs')}
            active={activeTab === 'blogs'}
          >
            Blogs
          </ForwardedToggleButton>
        </ButtonGroup>
      <ViewSection>{renderPosts()}</ViewSection>
    </SectionWrapper>
  );
};

export default PostSection;
