import { ShareData } from '../store/useStore';

const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const initKakaoSDK = () => {
  if (typeof window !== 'undefined' && window.Kakao) {
    window.Kakao.init(KAKAO_API_KEY);
  }
};

export const shareTwitter = (url: string) => {
  const text = encodeURIComponent('격투기 종목 테스트');
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`);
};

export const shareFacebook = (url: string) => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
};

export const shareKakao = (data: ShareData) => {
  if (typeof window !== 'undefined' && window.Kakao) {
    window.Kakao.Link.createDefaultButton({
      container: '#kakao-share-button',
      objectType: 'feed',
      content: {
        title: data.title,
        description: data.description,
        imageUrl: data.resultImageUrl,
        link: {
          mobileWebUrl: data.currentUrl,
          webUrl: data.currentUrl
        }
      }
    });
  }
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('링크가 복사되었습니다.');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}; 