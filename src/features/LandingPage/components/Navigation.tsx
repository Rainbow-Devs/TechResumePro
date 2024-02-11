// Navigation.tsx
import React from 'react';
import { Nav, NavList, StyledLink, Logo, Button, ButtonGroup } from './styles/Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Logo>
      <img src="./robot-solid.svg" alt="" />
      <h1>Tech Resume</h1>
      </Logo>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <NavList>
          <li><StyledLink to="/dashboard">Dashboard</StyledLink></li>
          <li><StyledLink to="/jobs">Jobs</StyledLink></li>
          <li><StyledLink to="/resumes">Resumes</StyledLink></li>
          <li><StyledLink to="/cover-letters">Cover Letters</StyledLink></li>
          <li><StyledLink to="/resources">Resources</StyledLink></li>
        </NavList>
        <ButtonGroup>
          <Button variant='signIn'>Log In</Button>
          <Button variant="signUp">Sign Up</Button>
        </ButtonGroup>
      </div>
    </Nav>
  );
};

export default Navigation;
