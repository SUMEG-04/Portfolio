// /src/components/testimonials/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../context/ThemeContext';

// Styled components for the Testimonials
const TestimonialsWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Testimonial = styled.div`
  margin-bottom: 30px;
`;

const Quote = styled.blockquote`
  font-size: 1.6em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Author = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <TestimonialsWrapper theme={theme}>
      <Testimonial>
        <Quote>"I love the simplicity and efficiency of this website. It makes my life so much easier!"</Quote>
        <Author>- John Doe</Author>
      </Testimonial>
      <Testimonial>
        <Quote>"Amazing products, fast delivery, and excellent customer service. Highly recommended!"</Quote>
        <Author>- Jane Smith</Author>
      </Testimonial>
      {/* Add more testimonials as needed */}
    </TestimonialsWrapper>
  );
};

export default Testimonials;
