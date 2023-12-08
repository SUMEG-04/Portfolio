// /src/pages/Contact.js

import React from 'react';
import styled from 'styled-components';

// Import necessary components
import ContactForm from '../../components/contact/ContactForm/ContactForm';
import { useTheme } from '../../context/ThemeContext';

// Styled components for the Contact page
const ContactWrapper = styled.div`
  /* Add any global styles specific to the Contact page */
  background:${({ theme }) => theme[theme.mode].background};
  color:${({ theme }) => theme[theme.mode].text}
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: ${({ theme }) => theme[theme.mode].text};
  margin-bottom: 20px;
`;

const Contact = () => {
    const {theme}=useTheme()
  return (
    <ContactWrapper theme={theme}>
      <ContentWrapper theme={theme}>
        <Title theme={theme}>Contact</Title>
        <ContactForm />
        {/* Add more content and details about the contact page */}
      </ContentWrapper>
    </ContactWrapper>
  );
};

export default Contact;
