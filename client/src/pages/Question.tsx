import { useNavigate } from 'react-router-dom';
import Layout from '@components/Layout';
import useStore from '@/store/useStore';
import { quest, QuestItem } from '@utils/sentence';
import { MBTIScore } from '@/types/mbti';
import Loading from '@components/Loading';
import { useEffect, useState } from 'react';
import { useSaveMBTIResult } from '@/api/mbtiQueries';

const questions = Object.entries(quest).map(([id, item]: [string, QuestItem]) => ({
  id: parseInt(id),
  question: item.title,
  options: [
    { id: 'A', text: item.A.text, type: item.A.type },
    { id: 'B', text: item.B.text, type: item.B.type }
  ]
}));

const Question = () => {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep, addAnswer, answers } = useStore();
  const currentQuestion = questions[currentStep];
  const [isLoading, setIsLoading] = useState(false);
  
  const saveMutation = useSaveMBTIResult();
  
  useEffect(() => {
    if (isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  const handleAnswer = async (answerId: string) => {
    const selectedOption = currentQuestion.options.find(option => option.id === answerId);
    const selectedType = selectedOption?.type || '';

    addAnswer(selectedType);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      return;
    }
    
    const result = calculateMBTI(answers.concat(selectedType));
    setIsLoading(true);
    
    try {
      // 결과를 서버에 저장
      const saveResult = await saveMutation.mutateAsync(result);
      
      // 1.5초 후에 결과 페이지로 이동
      setTimeout(() => {
        if (saveResult.redirectUrl) {
          navigate(saveResult.redirectUrl);
        } else {
          navigate(`/result/${result}`);
        }
      }, 1500);
    } catch (error) {
      console.error('Error processing result:', error);
      navigate(`/result/${result}`);
    }
  };

  const calculateMBTI = (answersList: string[]): string => {
    const result: MBTIScore = {
      E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0
    };
    
    answersList.forEach(type => {
      if (type && type in result) {
        result[type as keyof MBTIScore] += 1;
      }
    });
    
    let mbtiResult = '';
    mbtiResult += result.E > result.I ? 'E' : 'I';
    mbtiResult += result.S > result.N ? 'S' : 'N';
    mbtiResult += result.F > result.T ? 'F' : 'T';
    mbtiResult += result.P > result.J ? 'P' : 'J';
    
    return mbtiResult;
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <>
      {isLoading ? <Loading /> : (
        <Layout>
          <div className="container fade-in--quick">
          <div className="wrapper-progress">
            <div className="progress-page-num">
              {currentStep + 1} / {questions.length}
            </div>
            <div className="progress" role="progressbar" style={{ height: '8px' }}>
              <div 
                className="progress-bar bg-primary" 
                style={{ width: `${progress}%` }}
                aria-valuenow={progress} 
                aria-valuemin={0} 
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="wrapper-question">
            <div className="question-title" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
            <div className="question-btns noselect">
              {currentQuestion.options.map((option) => (
                <button 
                  key={option.id} 
                  id={option.id} 
                  className="btn-fade" 
                  onClick={() => handleAnswer(option.id)}
                  disabled={isLoading}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Question; 