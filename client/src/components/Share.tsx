import styled from '@emotion/styled';
import Button from './Button';

const ShareContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 20px 0;
`;

const ShareButton = styled(Button)`
  width: 48px;
  height: 48px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;

  &.twitter {
    background-color: #1DA1F2;
    background-image: url('/images/icon-twitter.png');
  }

  &.facebook {
    background-color: #4267B2;
    background-image: url('/images/icon-facebook.png');
  }

  &.kakao {
    background-color: #FEE500;
    background-image: url('/images/icon-kakao.png');
  }

  &.link {
    background-color: #6c757d;
    background-image: url('/images/icon-link.png');
  }
`;

interface ShareProps {
  onShare: (platform: string) => void;
}

const Share = ({ onShare }: ShareProps) => {
  return (
    <ShareContainer>
      <ShareButton className="twitter" onClick={() => onShare('twitter')} />
      <ShareButton className="facebook" onClick={() => onShare('facebook')} />
      <ShareButton className="kakao" onClick={() => onShare('kakao')} />
      <ShareButton className="link" onClick={() => onShare('link')} />
    </ShareContainer>
  );
};

export default Share; 