import { WhyTechResumeContainer, Headline, CardGrid, Card, CardImage, PrimaryText, SecondaryText } from './styles/WhyTechResume.styled';

const WhyTechResume = () => {
  // Example card data - replace with your actual data
  const cards = [
    {
      image: '/resume1.jpeg',
      primaryText: 'Resumes that get inverviews',
      secondaryText: 'Get tailored feedback on your resume and linkedin profile. Get hired faster. ',
    },
    {
      image: '/resume2.jpeg',
      primaryText: 'Cover letters that seal the deal',
      secondaryText: 'Write a cover letter that compliments your resume we will give you tips to make it shine.',
    },
    {
      image: '/resume3.jpeg',
      primaryText: 'Job posts that attract top talent',
      secondaryText: 'Post your jobs to our network of 1.5 million tech professionals and companies. Find the best talent for your team. ',
    },
    {
      image: '/resume4.jpeg',
      primaryText: 'AI Powered tools that help you write better',
      secondaryText: 'Don&apos;t know where to start? Our AI powered tools will help you write smarter, better, and faster.',
    
    }
    ];
  return (
    <WhyTechResumeContainer>
      <Headline>What you can do with TechResume</Headline>
      <CardGrid>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={`Card ${index + 1}`} />
            <PrimaryText>{card.primaryText}</PrimaryText>
            <SecondaryText>{card.secondaryText}</SecondaryText>
          </Card>
        ))}
      </CardGrid>
    </WhyTechResumeContainer>
  );
};

export default WhyTechResume;
