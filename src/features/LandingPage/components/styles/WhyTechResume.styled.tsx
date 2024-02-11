import styled from 'styled-components';

export const WhyTechResumeContainer = styled.div`
  max-width: 70%;
  margin: 0 auto; // Centers the container
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif; // Replace with your preferred font
`;

export const Headline = styled.h2`
  text-align: left;
  margin-bottom: 2rem; // Adjust as needed

`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Creates a 4-column grid
  gap: 1rem; // Adjust the gap between cards as needed
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; // Adjust the gap between card elements as needed
`;

export const CardImage = styled.img`
  width: 100%; // Adjust as needed
  border-radius: 10px; // Optional
`;

export const PrimaryText = styled.h3`
  margin: 0; // Removes default margin
`;

export const SecondaryText = styled.p`
  margin: 0; // Adjust as needed
`;
