// Navigation.styled.tsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Nav = styled.nav`
  margin: 0;
  color: black;
  border-bottom: 1px solid #d8dadb; // Add border to separate the navigation from the rest of the content
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-family: 'Roboto', sans-serif;

  img {
    width: 30px;
  
  }

`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  padding: 0.5rem;
  color: black; // Set the text color for your links
  text-decoration: none; // Remove underlines from links

  &:hover {
    color: #1f93e0; // Optional: change color on hover
  }
`;


export const Logo = styled.div`
  display: flex;
  align-items: center;

  img, svg {
    margin-right: 0.5rem;
  }

  h1 {
    margin: 0; // Remove margin from h1 to avoid unexpected spacing
  }
`;

export const ButtonGroup = styled.div`
  display: flex; // Ensure buttons are horizontally aligned
  align-items: center;
`;

export const Button = styled.button<{ variant?: 'signIn' | 'signUp' }>`
  font-weight: bold;
  padding: 0.5rem 1rem;
  color: ${({ variant }) => (variant === 'signIn' ? 'white' : 'black')};
  border: none;
  cursor: pointer;
  background: ${({ variant }) => (variant === 'signIn' ? '#1f93e0' : '#f1f3f4')};
  border-radius: 10px;
  margin-left: .5rem; // Add margin to separate the buttons
  transition: background-color 0.3s ease; // Smooth transition for background-color

  &:hover {
    background: ${({ variant }) => (variant === 'signIn' ? '#0056b3' : '#d8dadb')};
  }
`;
