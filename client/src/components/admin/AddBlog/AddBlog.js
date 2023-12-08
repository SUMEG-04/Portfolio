// src/components/admin/AddBlog.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

const ModalWrapper = styled.div`
  background-color:${({theme})=>theme[theme.mode].background};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.7);
  width: 80%;
  max-width: 100%;
  position: fixed;
  padding:2rem;
  top: 50%;
  left: 50%;
  height:50vh;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color:${({theme})=>theme[theme.mode].text};
  overflow:auto;

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
`;

const AddBlogModal = ({ onAddBlogPost, setShowAddBlog }) => {
  const { theme } = useTheme();

  const [blogData, setBlogData] = useState({
    title: '',
    content: [],
  });

  const handleTitleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleParaChange = (e, index) => {
    const { value } = e.target;
  
    setBlogData((prevData) => {
      const updatedContent = [...prevData.content];
      updatedContent[index] = {
        ...updatedContent[index],
        para: value,
      };
  
      return {
        ...prevData,
        content: updatedContent,
      };
    });
  };
  

  const handleImageChange = (e, index) => {
    const imageFile = e.target.files[0];

    setBlogData((prevData) => ({
      ...prevData,
      content: prevData.content.map((item, i) =>
        i === index
          ? {
              ...item,
              images: [imageFile],
            }
          : item
      ),
    }));
  };

  const handleAddParagraph = () => {
    setBlogData((prevData) => ({
      ...prevData,
      content: [...prevData.content, { type: 'text', para: '', images: [] }],
    }));
  };

  const handleAddImageParagraph = () => {
    setBlogData((prevData) => ({
      ...prevData,
      content: [...prevData.content, { type: 'image', para: '', images: [] }],
    }));
  };

  const handleAddBlog = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', blogData.title);
    blogData.content.forEach((item, index) => {
      formData.append(`content[${index}][type]`, item.type);
      formData.append(`content[${index}][para]`, item.para);
      if (item.type === 'image' && item.images.length > 0) {
        formData.append(`images`, item.images[0]);
      }
    });

    onAddBlogPost(formData);
    closeModal();
  };

  const closeModal = () => {
    setShowAddBlog(false);
  };

  return (
    <ModalWrapper theme={theme}>
      <h2>Add Blog Post</h2>
      <form onSubmit={handleAddBlog} encType="multipart/form-data">
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleTitleChange}
        />
      </label>

        {blogData.content.map((item, index) => (
          <div key={index}>
              <label>
          Paragraph {index + 1}:
          <textarea
            type="text"
            name={`content[${index}][para]`}
            value={item.para}
            onChange={(e) => handleParaChange(e, index)}
          />
        </label>

            {item.type === 'image' && (
              <label>
                Upload Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                />
              </label>
            )}
          </div>
        ))}

        <button type="button" onClick={handleAddParagraph}>
          Add Text Paragraph
        </button>
        <button type="button" onClick={handleAddImageParagraph}>
          Add Image Paragraph
        </button>

        <button type="submit">Add Blog Post</button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </form>
    </ModalWrapper>
  );
};

export default AddBlogModal;
