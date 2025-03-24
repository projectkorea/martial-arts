import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const StartButton = styled(Button)`
  font-size: 20px;
  padding: 16px 48px;
`;

const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/question');
  };

  return (
    <Layout>
      <Container>
        <Title>격투기 종목 테스트</Title>
        <Description>
          복싱, 주짓수, 태극권, 카포에라..<br />
          나와 가장 잘 맞는 격투기 종목은?
        </Description>
        <StartButton onClick={handleStart} variant="primary" fullWidth>
          테스트 시작하기
        </StartButton>
      </Container>
    </Layout>
  );
};

export default Start; 