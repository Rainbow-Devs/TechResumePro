import React from 'react';
import { BannerImage, BannerHeadline, BannerDescription, Button, ButtonGroup } from './styles/BannerCard.styled';

const BannerCard = () => {
  return (
    <BannerImage backgroundImage="./codioful-formerly-gradienta-ix_kUDzCczo-unsplash.jpg">
      <BannerHeadline>Find a tech job you love</BannerHeadline>
      <BannerDescription>Write resumes and cover letters that work with out AI powered tools.</BannerDescription>
      <ButtonGroup>
        <Button variant='signUp'>Get Started</Button>
        <Button variant='signIn'>Log In</Button>
      </ButtonGroup>
    </BannerImage>
  );
};

export default BannerCard;
