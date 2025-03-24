import styled from '@emotion/styled';

const Container = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  text-align: center;
`;

const TraitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

const TraitItem = styled.div`
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
`;

const TraitTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const TraitDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

interface Trait {
  title: string;
  description: string;
}

interface ResultCardProps {
  title: string;
  description: string;
  traits: Trait[];
}

const ResultCard = ({ title, description, traits }: ResultCardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TraitsContainer>
        {traits.map((trait, index) => (
          <TraitItem key={index}>
            <TraitTitle>{trait.title}</TraitTitle>
            <TraitDescription>{trait.description}</TraitDescription>
          </TraitItem>
        ))}
      </TraitsContainer>
    </Container>
  );
};

export default ResultCard; 