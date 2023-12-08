// Footer.js

import React from 'react';
import styled from 'styled-components';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

// Footer.js

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #feb479, #ff7e5f);/* Gradient background */
  color:#000;
  padding: 20px 0;
  text-align: center;
  position:relative;
  bottom: 0;
  width: 100%;
`;


const FooterText = styled.p`
  font-weight:500;
  font-size: 1.2em;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.5em;
  margin: 0 10px;
  &:hover {
    opacity: 0.8;
    color:#fff;
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.2em;
  display: block;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2023 Your Name. All rights reserved.</FooterText>
      <SocialLinks>
        <SocialLink href="#" target="_blank" rel="noopener noreferrer">
          <AiOutlineTwitter />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/sumeg-sharnagat-051851204/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/SUMEG-04" target="_blank" rel="noopener noreferrer">
          <AiOutlineGithub />
        </SocialLink>
        <SocialLink href="sumeg04112001@gmail.com">
          <AiOutlineMail />
        </SocialLink>
      </SocialLinks>
      <EmailLink href="sumeg04112001@gmail.com">sumeg04112001@gmail.com</EmailLink>
    </FooterWrapper>
  );
};

export default Footer;
