// Import styled from styled-components
import styled from 'styled-components';

// Define BannerImage styled component
export const BannerImage = styled.div<{ backgroundImage: string }>`
  max-width: 70%;
  height: 350px;
  border-radius: 10px;
  margin: 2rem auto;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
`;

// Define additional styled components for the headline and description
export const BannerHeadline = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  padding: 2rem;
`;

export const BannerDescription = styled.p`
  color: #fff;
  margin-bottom: 20px; // Adjusted to provide space for ButtonGroup
  font-family: 'Roboto', sans-serif;
  padding: 0 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px; // Adds a gap between buttons
  padding: 1rem 2rem;
`;

export const Button = styled.button<{ variant?: 'signIn' | 'signUp' }>`
  font-weight: bold;
  padding:.75rem 1.5rem;
  color: ${({ variant }) => (variant === 'signIn' ? 'white' : 'black')};
  border: none;
  cursor: pointer;
  background: ${({ variant }) => (variant === 'signIn' ? '#1f93e0' : '#f1f3f4')};
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background: ${({ variant }) => (variant === 'signIn' ? '#0056b3' : '#d8dadb')};
  }
`;
