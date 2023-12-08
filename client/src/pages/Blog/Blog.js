// /src/pages/Blog.js

import React from 'react';
import styled from 'styled-components';

// Import necessary components
import BlogList from '../../components/blog/BlogList/BlogList';
import { useTheme } from '../../context/ThemeContext';

// Styled components for the Blog page
const BlogWrapper = styled.div`
  /* Add any global styles specific to the Blog page */
  background-color: ${({ theme }) => theme[theme.mode].background}; /* Use the theme background color */
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'}; /* Use the theme text color */
  min-height:60vh;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme[theme.mode]?.text || 'inherit'};
  margin-bottom: 20px;
`;

const Blog = () => { 
    const {theme}=useTheme()
  return (
    <BlogWrapper theme={theme}>
      <ContentWrapper>
        <Title theme={theme}>Blog</Title>
        <BlogList />
        {/* Add more content and details about your blog posts */}
      </ContentWrapper>
    </BlogWrapper>
  );
};

export default Blog;
