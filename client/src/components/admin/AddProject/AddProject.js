import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import DatePicker from 'react-datepicker'; // Import the date picker library
import 'react-datepicker/dist/react-datepicker.css'; // Import styles for the date picker

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Set a z-index lower than your modal */
  pointer-events: ${props => (props.showOverlay ? 'auto' : 'none')};
`;

const ModalWrapper = styled.div`
  background-color:${({theme})=>theme[theme.mode].background};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.7);
  width: 80%;
  max-width: 100%;
  position: fixed;
  overflow:auto;
  height:70vh;
  padding:2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color:${({theme})=>theme[theme.mode].text};

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  input,
  textarea {
    width: 90%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  textarea{
    height:100px;
    font-size:16px;
    font-family:san
  }

  select,option{
    padding:5px;
  }

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .block{
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:left;
  }

  .section{
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
  }
`;

const AddProjectModal = ({ onAddProject, setShowAddProject,showConfirmation }) => {
    const {theme}=useTheme()

  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    technologies: '',
    image: null,
    feature:false,
    projectlink:"",
    role:"",
    timeline: [null, null], 
  });

  const handleInputChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProjectData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  const handleFeatureChange = (e) => {
    const { value } = e.target;
    setProjectData((prevData) => ({ ...prevData, feature: value }));
  };

  const handleTimelineChange = (dates) => {
    setProjectData((prevData) => ({ ...prevData, timeline: dates }));
  };
  
  
  const handleAddProject = async (e) => {
    e.preventDefault();
  
    // Check if the image data is available in base64 format
    if (projectData.image) {
      // Continue with your FormData logic
      const formData = new FormData();
      formData.append('title', projectData.title);
      formData.append('description', projectData.description);
      formData.append('technologies', projectData.technologies);
      formData.append('image', projectData.image);
      formData.append('feature', projectData.feature);
      formData.append('projectlink', projectData.projectlink);
      formData.append('role', projectData.role);
      formData.append('timeline', projectData.timeline);
  
      try {
        await onAddProject(formData);
        setProjectData({
          title: '',
          description: '',
          technologies: '',
          image: null,
        });
        setShowAddProject(false);
      } catch (error) {
        console.error('Error adding project:', error.message);
      }
    } else {
      console.error('Image data is not available.');
    }
  };
  
  

  const closeModal = () => {
    setShowAddProject(false);
  };

  return (
    <><Overlay showOverlay={showConfirmation} />
    <ModalWrapper theme={theme}>
      <h2>Add Project</h2>
      <form onSubmit={handleAddProject} encType='multipart/form-data'>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleInputChange} value={projectData.title} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" onChange={handleInputChange} value={projectData.description} />
        <label htmlFor="technologies">Technologies:</label>
        <input type="text" id="technologies" name="technologies" onChange={handleInputChange} value={projectData.technologies} />
        <div className="block">
          <div className="section">
            <label htmlFor="feature">Feature:</label>
            <select type="text" id="feature" name="feature" onChange={handleFeatureChange} value={projectData.feature} >
              <option value="">Select feature</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <label htmlFor="projectlink">projectlink:</label>
            <input type="text" id="projectlink" name="projectlink" onChange={handleInputChange} value={projectData.projectlink} />
          </div>
          <div className="section">
            <label htmlFor="role">role:</label>
            <input type="text" id="role" name="role" onChange={handleInputChange} value={projectData.role} />
            <label htmlFor="timeline">timeline:</label>
            <DatePicker
              selected={projectData.timeline[0]}
              onChange={(date) => handleTimelineChange([date, projectData.timeline[1]])}
              selectsStart
              startDate={projectData.timeline[0]}
              endDate={projectData.timeline[1]}
              dateFormat="dd/MM/yyyy"
              placeholderText="Start Date"
            />  
            <DatePicker
              selected={projectData.timeline[1]}
              onChange={(date) => handleTimelineChange([projectData.timeline[0], date])}
              selectsEnd
              startDate={projectData.timeline[0]}
              endDate={projectData.timeline[1]}
              dateFormat="dd/MM/yyyy"
              placeholderText="End Date"
            />
          </div>
        </div>
        <label htmlFor="image">Image:</label>
        <input className='hidden' type="file" id="image" name="image" onChange={handleImageChange} accept=".png, .jpg, .jpeg" />
        <button type='submit'>Add Project</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </ModalWrapper>
    </>
  );
};

export default AddProjectModal;
