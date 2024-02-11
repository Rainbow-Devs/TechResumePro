import { BannerImage, BannerHeadline, BannerDescription, Button, ButtonGroup } from './styles/BannerCard.styled';

//Photo by <a href="https://unsplash.com/@codioful?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Codioful (Formerly Gradienta)</a> on <a href="https://unsplash.com/photos/pink-and-blue-color-illustration-ix_kUDzCczo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

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
