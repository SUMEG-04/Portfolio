// NotFound.js
import React from 'react';
import styled from 'styled-components';
import notfound from '../../assets/notfound.jpg'
import { useTheme } from '../../context/ThemeContext';

const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme[theme.mode].background};
`;

const NotFoundContainer = styled.div`
  text-align: center;
`;

const NotFoundHeading = styled.h1`
  font-size: 5rem;
  color: ${({theme})=>theme[theme.mode].text};
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: ${({theme})=>theme[theme.mode].toggleBackgroundColor};
`;

const NotFoundImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  border-radius:50%;
`;

const NotFound = () => {
    const {theme}=useTheme()
  return (
    <NotFoundWrapper theme={theme}>
      <NotFoundContainer>
        <NotFoundHeading theme={theme}>404</NotFoundHeading>
        <NotFoundText theme={theme}>Oops! Page not found.</NotFoundText>
        <NotFoundImage
          src={notfound}
          alt="404 Illustration"
        />
      </NotFoundContainer>
    </NotFoundWrapper>
  );
};

export default NotFound;
