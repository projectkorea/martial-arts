import styled from '@emotion/styled';
import { getAssetPath } from '@/utils/assets';
import { useNavigate } from 'react-router-dom';

const ShareButton = styled.button`
  position: relative;
  display: inline-block;
  font-size: 12px;
  color: #f7f9f9;
  width: 50px;
  align-content: center;
  margin-right: 10px;
  padding-top: 50px;
  background-repeat: no-repeat;

  &.twitter {
    background-image: url(${getAssetPath('images/icon-twitter.png')});
  }

  &.facebook {
    background-image: url(${getAssetPath('images/icon-facebook.png')});
  }

  &.kakao {
    background-image: url(${getAssetPath('images/icon-kakao.png')});
  }

  &.link {
    background-image: url(${getAssetPath('images/icon-link.png')});
  }
`;

interface ShareProps {
  onShare: (platform: string) => void;
}

const Share = ({ onShare }: ShareProps) => {
  const navigate = useNavigate();
  return (
    <div className="share wrapper">
      <div className="result-share-text">내 결과 공유하기</div>
      <div className="btn-collection">
        <ShareButton className="kakao" id="btnKakao2" onClick={() => onShare('kakao')}>카카오</ShareButton>
      </div>
      <div className="result-share-text">친구의 격투기 종목은?</div>
      <div className="btn-collection">
        <ShareButton className="twitter" onClick={() => onShare('twitter')}>트위터</ShareButton>
        <ShareButton className="facebook" onClick={() => onShare('facebook')}>페이스북</ShareButton>
        <ShareButton className="kakao" id="btnKakao1" onClick={() => onShare('kakao')}>카카오</ShareButton>
        <ShareButton className="link" onClick={() => onShare('link')}>링크복사</ShareButton>
      </div>
      <button className="retest-btn" onClick={() => navigate('/')}>테스트 다시하기</button>
    </div>
  );
};

export default Share;