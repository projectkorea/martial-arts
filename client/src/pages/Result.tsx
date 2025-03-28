import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Share from '@components/Share';
import Button from '@components/Button';
import { initKakaoSDK, shareTwitter, shareFacebook, shareKakao, copyToClipboard } from '@utils/share';
import useStore from '@/store/useStore';
import { MBTI_RESULTS } from '@/utils/mbtiResults';
import { MBTIResult } from '@/types/mbti';
import { useMBTIStats } from '@/api/mbtiQueries';
import Loading from '@components/Loading';

const Result = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { setShareData } = useStore();
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // 결과 데이터 가져오기
  const result = type ? MBTI_RESULTS[type] as MBTIResult : null;
  
  // React Query로 통계 데이터 가져오기
  const { data: statsData, isLoading: isStatsLoading } = useMBTIStats(type, !!type);
  
  // type이 없거나 결과가 없으면 홈으로 리다이렉트
  useEffect(() => {
    if (!type || (!result && !isLoading)) {
      navigate('/');
    }
  }, [type, navigate, result, isLoading]);
  
  useEffect(() => {
    initKakaoSDK();
    window.scrollTo(0, 0);
    
    // 데이터 로딩이 완료되면 로딩 상태 해제
    if (result && !isStatsLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // 최소한의 로딩 시간을 보장
      
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

  const handleRestart = () => {
    navigate('/');
  };

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen);
  };

  // 로딩 중이면 로딩 컴포넌트 표시
  if (isLoading) {
    return <Loading />;
  }
  
  // 결과가 없으면 오류 메시지 표시
  if (!result) {
    return (
      <Layout>
        <div className="container">
          <div className="error-message">
            <h2>잘못된 결과입니다.</h2>
            <Button onClick={handleRestart}>처음으로</Button>
          </div>
        </div>
      </Layout>
    );
  }

  // 통계 데이터 계산
  const totalNumber = statsData?.totalNumber || 0;
  const sameNumber = statsData?.sameNumber || 0;
  const percentage = totalNumber > 0 ? (sameNumber / totalNumber * 100).toFixed(2) : '0.00';

  return (
    <Layout>
      <div className="container">
        <div className="result-page">
          <div className="result-top wrapper-top">
            <div className="result char_result">
              <div className="result-text-white">나랑 가장 잘 맞는 격투기 종목은</div>
              <div className="result-title animate__animated animate__pulse">{result.title}</div>
              <div className="result-sub-title animate__animated animate__pulse">{result.mbti}</div>
              <img className="result-img" src={result.imageUrl} alt={result.title} />
              <div className="result-subtitle">
                <div className="icon-quote">
                  <i className="fas fa-quote-left icon-left"></i>
                  <i className="fas fa-quote-right icon-right"></i>
                </div>
                {result.quote}
              </div>
            </div>
          </div>

          <div className="result-middle">
            <div className="result-rank">
              전체 참여자 <div className="total-number result-rank-ment">{totalNumber}</div> 명 중
              <br />
              나와 같은 격투가 유형은
              <br />
              <label className="percentage">{percentage}%</label> 입니다.
            </div>

            <div className="result-explannation result-text-left wrapper-explanation">
              <ul>
                {result.explanation.map((item, index) => (
                  <li key={index}>
                    <i className="fas fa-fist-raised"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="folder">
                {!isContentOpen ? (
                  <button className="folder-button" onClick={toggleContent}>
                    <i className="fas fa-arrow-down"></i>
                    설명 더 보기
                  </button>
                ) : null}
                <div className="folder-content" style={{ display: isContentOpen ? 'block' : 'none' }}>
                  <ul>
                    {result.additionalInfo.map((item, index) => (
                      <li key={index}>
                        <i className="fas fa-fist-raised"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="folder-footer">
                    <button className="folder-button-down" onClick={toggleContent}>
                      <i className="fas fa-arrow-up"></i>
                      접기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="result-bottom partner-wrapper wrapper">
            <Link className="best-partner" to={`/result/${result.bestPartner.type}`}>
              <div>
                <div className="result-text-black-best">최고의 파트너</div>
                <div className="result-char-wrapper">
                  <div className="result-title-black">{result.bestPartner.title}</div>
                  <br />
                  <img className="result-partner-img" src={result.bestPartner.imageUrl} alt={result.bestPartner.title} />
                </div>
              </div>
            </Link>
            <Link className="worst-partner" to={`/result/${result.worstPartner.type}`}>
              <div>
                <div className="result-text-black-worst">최악의 파트너</div>
                <div className="result-char-wrapper">
                  <div className="result-title-black">{result.worstPartner.title}</div>
                  <br />
                  <img className="result-partner-img" src={result.worstPartner.imageUrl} alt={result.worstPartner.title} />
                </div>
              </div>
            </Link>
          </div>
          <Share onShare={handleShare} />
          <Button onClick={handleRestart} className="restart-btn">다시하기</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Result; 