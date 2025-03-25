import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@components/Layout';
import Share from '@components/Share';
import { initKakaoSDK, shareTwitter, shareFacebook, shareKakao, copyToClipboard } from '@utils/share';
import useStore from '@/store/useStore';
import { mbtiResults, getMBTITypeById, defaultStats } from '@utils/mbtiResults';

const Result = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setShareData } = useStore();
  
  // ID를 통해 MBTI 유형 찾기
  const mbtiType = getMBTITypeById(id);
  const result = mbtiResults[mbtiType];
  
  const [showMore, setShowMore] = useState(false);
  // 통계 데이터 - 데이터베이스에서 가져오거나 기본값 사용
  const [stats] = useState(result.stats || defaultStats);

  useEffect(() => {
    initKakaoSDK();
  }, []);

  const handleShare = (platform: string) => {
    const shareData = {
      title: result.title,
      description: result.description,
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

  if (!result) {
    return <div>잘못된 결과입니다.</div>;
  }

  return (
    <Layout>
      <div className="container-ie fade-in">
        <main className="result-page">
          <div className="result-top wrapper-top">
            <div className="result char_result">
              <div className="result-text-white">나랑 가장 잘 맞는 격투기 종목은</div>
              <div className="result-title animate__animated animate__pulse">{result.title}</div>
              <div className="result-sub-title animate__animated animate__pulse">{result.mbti}</div>
              <img className="result-img" src={result.imageUrl} alt={result.title} />
              <div className="result-subtitle">
                <div className="icon-quote">
                  <span className="icon-left">❝</span>
                  <span className="icon-right">❞</span>
                </div>
                {result.quote}
                <div className="icon-right"></div>
              </div>
            </div>
          </div>
          
          <div className="result-middle">
            <div className="result-rank">
              전체 참여자
              <div className="total-number result-rank-ment">{stats.totalNumber}</div>
              명 중
              <br />
              나와 같은 격투가 유형은
              <br />
              <label className="percentage">{(stats.sameNumber/stats.totalNumber*100).toFixed(2)}%</label>
              입니다.
            </div>
            
            <div className="result-explannation result-text-left wrapper-explanation">
              {result.explanation.map((text, index) => (
                <li key={index}>
                  <span className="icon">✊</span>
                  {' '}{text}
                </li>
              ))}
              
              <div className="folder">
                <button className="folder-button" onClick={() => setShowMore(true)}>
                  <span className="icon">↓</span>
                  {' '}설명 더 보기
                </button>
              </div>
              
              {showMore && (
                <div className="folder-content">
                  {result.additionalInfo.map((text, index) => (
                    <li key={index}>
                      <span className="icon">✊</span>
                      {' '}{text}
                    </li>
                  ))}
                </div>
              )}
              
              {showMore && (
                <div className="folder-footer">
                  <button className="folder-button-down" onClick={() => setShowMore(false)}>
                    <span className="icon">↑</span>
                    {' '}접기
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="result-bottom partner-wrapper wrapper">
            <a className="best-partner" href={`/mbti/result/${result.bestPartner.type}`}>
              <div className="result-text-black-best">최고의 파트너</div>
              <div className="result-char-wrapper">
                <div className="result-title-black">{result.bestPartner.title}</div>
                <br />
                <img className="result-partner-img" src={result.bestPartner.imageUrl} alt={result.bestPartner.title} />
              </div>
            </a>
            
            <a className="worst-partner" href={`/mbti/result/${result.worstPartner.type}`}>
              <div className="result-text-black-worst">최악의 파트너</div>
              <div className="result-char-wrapper">
                <div className="result-title-black">{result.worstPartner.title}</div>
                <br />
                <img className="result-partner-img" src={result.worstPartner.imageUrl} alt={result.worstPartner.title} />
              </div>
            </a>
          </div>
          
          <Share onShare={handleShare} />
          
          <div className="result-footer">
            <button className="restart-button" onClick={() => navigate('/')}>
              다시 테스트하기
            </button>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Result; 