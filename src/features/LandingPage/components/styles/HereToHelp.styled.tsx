import styled from 'styled-components';

export const HereToHelpContainer = styled.div`
  width: 70%;
  margin: 0 auto; // Centers the container
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif; // Example font-family, adjust as needed
  gap: 2rem; // Space between items
  padding: 2rem 0; // Padding on top and bottom
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Creates a 2-column grid
  width: 100%;
  gap: 2rem; // Adjust the gap between columns as needed
  align-items: start; // Align items vertically
  margin: 2rem 0; // Spacing around the grid
`;

export const Image = styled.img`
  width: 100%; // Makes the image responsive
  border-radius: 10px; // Optional styling
`;

export const Heading = styled.h3`
    font-size: 2rem;
  margin: 0 0 1rem 0; // Spacing below the heading
`;

export const Paragraph = styled.p`
  margin: 0 0 2rem 0; // Spacing below the paragraph
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  background-color: #1f93e0; // Example button color
  color: white;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; // Darker shade on hover
  }
`;
