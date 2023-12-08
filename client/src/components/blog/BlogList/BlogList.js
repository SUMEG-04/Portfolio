// /src/components/blog/BlogList/BlogList.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';
import { useBlogContext } from '../../../context/BlogContext';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../UIElements/LoadingSpinner/LoadingSpinner';

// Styled components for the BlogList
const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  min-height:50vh;
`;

const BlogItem = styled.li`
  /* Add styles for the blog item */
  background-color: ${({ theme }) => theme[theme.mode]?.background || 'inherit'};
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
`;

const BlogTitle = styled.h3`
  font-size: 1.8em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
  margin-bottom: 10px;
`;

const BlogExcerpt = styled.p`
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
`;

const BlogList = () => {
  // Sample blog data (replace with your own)
  const {blogs} = useBlogContext()

  const {theme}=useTheme()
  const navigate=useNavigate()

  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return (
      <>
        <BlogExcerpt>Loading...</BlogExcerpt>
        <LoadingSpinner />
      </>
    );
  }
  
  return (
    <ListWrapper>
      {blogs.map((post, index) => (
        <BlogItem
          onClick={() => navigate(`/blogpost/${post._id}`)}
          theme={theme}
          key={index}
        >
          <BlogTitle theme={theme}>{post.title}</BlogTitle>
          <BlogExcerpt theme={theme}>{post.content[0].para.slice(0, 99)}</BlogExcerpt>
          {/* Add more details or links to the full blog post */}
        </BlogItem>
      ))}
    </ListWrapper>
  );
  
};

export default BlogList;
