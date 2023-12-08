// /src/components/contact/ContactForm/ContactForm.js

import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

// Styled components for the ContactForm
const FormWrapper = styled.form`
  /* Add styles for the contact form */
  background:${({ theme }) => theme[theme.mode].background};
  color:${({ theme }) => theme[theme.mode].text}
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2em;
  color: ${({ theme }) => theme[theme.mode].text};
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  /* Add input styles */
  width: 100%;
  padding: 10px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  /* Add textarea styles */
  width: 100%;
  padding: 10px;
  font-size: 1em;
`;

const Button = styled.button`
  /* Add button styles */
  background-color: skyblue;
  color: ${({ theme }) => theme[theme.mode].text};
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
`;

const ContactForm = () => {
  // Add form handling logic as needed
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };
  const {theme}=useTheme()

  return (
    <FormWrapper theme={theme} onSubmit={handleSubmit}>
      <FormGroup>
        <Label theme={theme} htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </FormGroup>
      <FormGroup>
        <Label theme={theme} htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />
      </FormGroup>
      <FormGroup>
        <Label theme={theme} htmlFor="message">Message</Label>
        <TextArea id="message" name="message" rows="6" required></TextArea>
      </FormGroup>
      <Button theme={theme} type="submit">Submit</Button>
    </FormWrapper>
  );
};

export default ContactForm;
