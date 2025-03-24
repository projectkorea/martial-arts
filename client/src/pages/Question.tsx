import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import useStore from '../store/useStore';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const QuestionText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const OptionButton = styled(Button)`
  text-align: left;
  padding: 20px;
  font-size: 18px;
  background-color: white;
  border: 2px solid #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #f5f5f5;
    border-color: #007AFF;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #007AFF;
  transition: width 0.3s ease;
`;

const questions = [
  {
    id: 1,
    question: "당신의 체격은 어떤가요?",
    options: ["마른 편", "보통", "근육질", "통통한 편"]
  },
  {
    id: 2,
    question: "운동 경험이 있나요?",
    options: ["없음", "1년 미만", "1-3년", "3년 이상"]
  },
  {
    id: 3,
    question: "어떤 운동을 선호하시나요?",
    options: ["격렬한 운동", "유연성 운동", "균형잡힌 운동", "기술적인 운동"]
  }
];

const Question = () => {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep, addAnswer } = useStore();
  const currentQuestion = questions[currentStep];

  const handleAnswer = (answer: string) => {
    addAnswer(answer);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // 결과 계산 로직
      navigate('/result/1');
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <Layout>
      <Container>
        <ProgressBar>
          <Progress progress={progress} />
        </ProgressBar>
        <QuestionText>{currentQuestion.question}</QuestionText>
        <OptionsContainer>
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleAnswer(option)}
              fullWidth
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>
      </Container>
    </Layout>
  );
};

export default Question; 