import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import ResultCard from '../components/ResultCard';
import Share from '../components/Share';
import Button from '../components/Button';
import { MBTI_RESULTS } from '../types/mbti';
import { initKakaoSDK, shareTwitter, shareFacebook, shareKakao, copyToClipboard } from '../utils/share';
import useStore from '../store/useStore';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const ResultImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 0 auto 24px;
  display: block;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 24px;
`;

const MBTIResult = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const { setShareData } = useStore();
  const result = MBTI_RESULTS[type || ''];

  useEffect(() => {
    initKakaoSDK();
  }, []);

  const handleShare = (platform: string) => {
    const shareData = {
      title: result.title,
      description: result.description,
      explanation: result.traits.map(t => t.description).join('\n'),
      currentUrl: window.location.href,
      resultImageUrl: result.imageUrl
    };
    setShareData(shareData);

    switch (platform) {
      case 'twitter':
        shareTwitter(window.location.href);
        break;
      case 'facebook':
        shareFacebook(window.location.href);
        break;
      case 'kakao':
        shareKakao(shareData);
        break;
      case 'link':
        copyToClipboard(window.location.href);
        break;
    }
  };

  const handleRestart = () => {
    navigate('/');
  };

  if (!result) {
    return <div>잘못된 결과입니다.</div>;
  }

  return (
    <Layout>
      <Container>
        <ResultImage src={result.imageUrl} alt={result.title} />
        <ResultCard
          title={result.title}
          description={result.description}
          traits={result.traits}
        />
        <Share onShare={handleShare} />
        <ButtonContainer>
          <Button onClick={handleRestart} variant="outline">
            다시 테스트하기
          </Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default MBTIResult; 