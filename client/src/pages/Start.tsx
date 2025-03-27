import { useNavigate } from 'react-router-dom';
import Layout from '@components/Layout';

const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/question');
  };

  const handleRandom = () => {
    const mbtiTypes = ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP', 'ENTP', 
                       'ISFP', 'ESFP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ', 'ISTP', 'ESTP'];
    const randomType = mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)];
    navigate(`/result/${randomType}`);
  };

  return (
    <Layout>
      <div className="container fade-in--quick">
        <main className="start-page">
          <img className="start-img" src="/images/kick.jpg" alt="Martial Arts Kick" />
          <div className="start title wrapper">
            <div className="start-title">
              나와 가장
              <br />
              잘 어울리는
            </div>
            <div className="space"></div>
            <div className="start-title-effect">격투기</div>
            <div className="start-title-space">종목은?</div>
          </div>
          <button className="start-btn" onClick={handleStart}>테스트 시작</button>
          <button className="start-btn random" onClick={handleRandom}>랜덤 결과</button>
        </main>
      </div>
    </Layout>
  );
};

export default Start; 