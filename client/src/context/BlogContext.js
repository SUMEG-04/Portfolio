// /src/context/BlogContext.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

// Create the context
const BlogContext = createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to add a new blog post
  const addBlogPost = (newPost) => {
    setBlogs((prevPosts) => [...prevPosts, newPost]);
  };

  // Function to select a blog post
  const selectBlogPost = (postId) => {
    const post = blogs.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const fetchData = async () => {
    try {
      const blogsData = await api.blog.getAllBlogPosts();
      //console.log(blogsData)
      setBlogs(blogsData.blogPosts || {});
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs,setBlogs,fetchData, selectedPost, addBlogPost, selectBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook to use the blog context
export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }

  return context;
};
