import { HereToHelpContainer, Grid, Image, Heading, Paragraph, Button } from './styles/HereToHelp.styled';

const HereToHelp = () => {
  return (
    <HereToHelpContainer>
      <Grid>
        <Image src="/resume-genius.jpeg" alt="Descriptive Alt Text" />
        <div>
          <Heading>We're here to help you Succeed</Heading>
          <Paragraph>Our mission is to help you find a job that you love. We're committed to helping you write resumes and cover letters that work, with our AI powered tools</Paragraph>
          <Button>Get Started</Button>
        </div>
      </Grid>
    </HereToHelpContainer>
  );
};

export default HereToHelp;
