// /src/components/blog/BlogPost/BlogPost.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../../services/api';
import { useTheme } from '../../../context/ThemeContext';

// Styled components for the Blog Post
const BlogPostWrapper = styled.div`
  max-width: 100%;
  padding: 40px 0;
  background:${({theme})=>theme[theme.mode].background};
`;

const BlogArticle=styled.article`
   max-width:800px;
   margin:0 auto;
`;

const PostTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color:${({theme})=>theme[theme.mode].text};
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: #777;
  margin-bottom: 20px;
`;

const Author = styled.span`
  font-size: 1.2em;
`;

const Date = styled.span`
  font-size: 1.2em;
`;

const PostContent = styled.div`
  font-size: 1.4em;
  line-height: 1.6;
  color: ${({theme})=>theme[theme.mode].text};
`;

const ImageContainer = styled.div`
  margin:10px;
  padding:5px;
  width: 90%;
  height: auto;
`;

const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius:10px;
`;

const BlogPara=styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: ${({theme})=>theme[theme.mode].text};
  margin-bottom: 20px;
`;


const BlogPost = () => {
  const {id}=useParams()
  const [blog,setBlog]=useState(null)

  const {theme}=useTheme()

  useEffect(()=>{
    const getBolgData=async()=>{
      try{
        const data=await api.blog.getBlogbyId(id)
        setBlog(data)
      }catch(err){
        console.log(err)
      }
    }
    getBolgData()
  },[id])

  if (!blog) {
    return <div>Loading...</div>; // You can customize the loading state as needed
  }
  console.log(blog)

  return (
    <BlogPostWrapper theme={theme}>
      <BlogArticle>
        <PostTitle theme={theme}>{blog.title}</PostTitle>
        <PostMeta>
          {/* <Date>{date}</Date> */}
        </PostMeta>
        <PostContent theme={theme}>{blog.content.map((blog,index)=>{
          return (
            <div key={index}>
            <BlogPara theme={theme}>{blog.para}</BlogPara>
            <ImageContainer>
              {blog.images!=0?<Image src={'http://localhost:3000/images/'+blog.images} alt={`Blog: ${blog}.title}`} />:null}
            </ImageContainer>
            </div>
          )
        })}</PostContent>
      </BlogArticle>
    </BlogPostWrapper>
  );
};

export default BlogPost;
