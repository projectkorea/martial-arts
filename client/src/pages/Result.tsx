import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@components/Layout';
import ResultCard from '@components/ResultCard';
import Share from '@components/Share';
import Button from '@components/Button';
import { initKakaoSDK, shareTwitter, shareFacebook, shareKakao, copyToClipboard } from '@utils/share';
import useStore from '@/store/useStore';

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

const results = {
  1: {
    title: "복싱",
    description: "당신은 복싱이 어울립니다!",
    traits: [
      {
        title: "빠른 반응",
        description: "복싱은 빠른 반응과 정확한 기술이 필요한 격투기입니다."
      },
      {
        title: "체력",
        description: "복싱을 통해 전신 체력을 향상시킬 수 있습니다."
      },
      {
        title: "자신감",
        description: "복싱을 통해 자신감을 키울 수 있습니다."
      },
      {
        title: "스트레스 해소",
        description: "복싱은 스트레스 해소에 매우 효과적입니다."
      }
    ],
    imageUrl: "/images/result-boxing.jpg"
  },
  2: {
    title: "주짓수",
    description: "당신은 주짓수가 어울립니다!",
    traits: [
      {
        title: "기술",
        description: "주짓수는 기술과 전략이 중요한 격투기입니다."
      },
      {
        title: "근력",
        description: "주짓수를 통해 근력을 향상시킬 수 있습니다."
      },
      {
        title: "유연성",
        description: "주짓수는 유연성 향상에 도움이 됩니다."
      },
      {
        title: "집중력",
        description: "주짓수는 집중력 향상에 효과적입니다."
      }
    ],
    imageUrl: "/images/result-jiujitsu.jpg"
  }
};

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setShareData } = useStore();
  const numericId = id ? parseInt(id) : 1;
  const result = results[numericId as keyof typeof results] || results[1];

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

export default Result; 