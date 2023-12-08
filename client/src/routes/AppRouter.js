// AppRouter.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutMe from '../pages/AboutMe/AboutMe';
import Portfolio from '../pages/Portfolio/Portfolio';
import ProjectDetailPage from '../pages/ProjectDetailPage/ProjectDetailPage';
import Skills from '../pages/Skills/Skills';
import Resume from '../pages/Resume/Resume';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Admin from '../pages/Admin/Admin';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import LoginRegisterPage from '../pages/LoginRegisterPage/LoginRegisterPage';
import PrivateRoute from '../components/auth/ProtectedComponent/PrivateRoute';
import BlogPost from '../components/blog/BlogPost/BlogPost';
import NotFound from '../components/NotFound/NotFound';

const AppRouter = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/project/:id" element={<ProjectDetailPage/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blogpost/:id" element={<BlogPost/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/admin' element={<PrivateRoute path="/admin" element={<Admin />} />}/>
        <Route path="/login" element={<LoginRegisterPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRouter;
