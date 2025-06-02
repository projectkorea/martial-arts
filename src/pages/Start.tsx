import { useNavigate } from 'react-router-dom';
import Layout from '@components/Layout';
import { MBTIType } from '@/types/mbti';
import { getAssetPath } from '@utils/assets';

const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/question');
  };

  const handleRandom = () => {
    const mbtiTypes: MBTIType[] = ['INFP', 'ENFP', 'INFJ', 'ENFJ', 'INTJ', 'ENTJ', 'INTP', 'ENTP', 
                       'ISFP', 'ESFP', 'ISFJ', 'ESFJ', 'ISTJ', 'ESTJ', 'ISTP', 'ESTP'];
    const randomType = mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)];
    navigate(`/result/${randomType}`);
  };

  return (
    <Layout>
      <div className="container fade-in--quick">
        <img className="start-img" src={getAssetPath('images/kick.jpg')} alt="Martial Arts Kick" />
        <div className="start title wrapper">
          <div className="start-title line-break">
            나와 가장
            <br />
            잘 어울리는
          </div>
          <div className="start-title-bold">격투기</div>
          <div className="start-title">종목은?</div>
        </div>
        <div className="start-btns">
          <button className="start-btn" onClick={handleStart}>시작</button>
          <button className="start-btn random" onClick={handleRandom}>랜덤 결과</button>
        </div>
      </div>
    </Layout>
  );
};

export default Start; 