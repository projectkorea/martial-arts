import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Share from '@components/Share';
import { initKakaoSDK, shareTwitter, shareFacebook, shareKakao, copyToClipboard } from '@utils/share';
import useStore from '@/store/useStore';
import { MBTI_RESULTS } from '@/utils/mbtiResults';
import { MBTIResult } from '@/types/mbti';
import { useMBTIStats } from '@/api/mbtiQueries';
import Loading from '@components/Loading';
import ResultHeader from '@components/ResultHeader';
import ResultStats from '@components/ResultStats';
import ExplanationSection from '@components/ExplanationSection';
import PartnerSection from '@components/PartnerSection';
import ErrorResult from '@components/ErrorResult';

const Result = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { setShareData } = useStore();
  const [isLoading, setIsLoading] = useState(true);
  
  const result = type ? MBTI_RESULTS[type] as MBTIResult : null;
  const { data: statsData, isLoading: isStatsLoading } = useMBTIStats(type, !!type);
  
  useEffect(() => {
    if (!type || (!result && !isLoading)) {
      navigate('/');
    }
  }, [type, navigate, result, isLoading]);
  
  useEffect(() => {
    initKakaoSDK();
    window.scrollTo(0, 0);
    
    if (result && !isStatsLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Minimum waiting time for smooth transition
      
      return () => clearTimeout(timer);
    }
  }, [result, isStatsLoading]);

  const handleShare = (platform: string) => {
    if (!result) return;
    
    const shareData = {
      title: result.title,
      description: result.quote,
      explanation: result.explanation.join('\n'),
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

  const handleRestart = () => navigate('/');

  if (isLoading) {
    return <Loading />;
  }
  
  if (!result) {
    return <ErrorResult onRestart={handleRestart} />;
  }

  const totalNumber = statsData?.totalNumber || 0;
  const sameNumber = statsData?.sameNumber || 0;

  return (
    <Layout>
      <div className="container fade-in--quick">
        <ResultHeader result={result} />
        <div className="result-middle">
          <ResultStats totalNumber={totalNumber} sameNumber={sameNumber} />
          <ExplanationSection 
            explanation={result.explanation} 
            additionalInfo={result.additionalInfo} 
          />
        </div>
        <PartnerSection 
          bestPartner={result.bestPartner} 
          worstPartner={result.worstPartner} 
        />
        <Share onShare={handleShare} />
      </div>
    </Layout>
  );
};

export default Result; 