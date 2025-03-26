// Kakao SDK Type Declaration (would typically be in a separate .d.ts file)
declare namespace Kakao {
  namespace Link {
    function createDefaultButton(options: {
      container: string;
      objectType: string;
      content: {
        title: string;
        description: string;
        imageUrl: string;
        link: {
          mobileWebUrl: string;
          webUrl: string;
        };
      };
    }): void;
  }
  
  function init(apiKey: string): void;
  function isInitialized(): boolean;
}

const URLS = {
  base: 'https://www.martialartstest.com',
  image: 'https://martialartstest.com/static/images/kakao-preview.jpg'
};

const elements = {
  resultPage: document.querySelector('.result-page') as HTMLElement,
  btnTwitter: document.querySelector('.twitter') as HTMLElement,
  btnFacebook: document.querySelector('.facebook') as HTMLElement,
  btnKakao1: document.querySelector('.kakao1') as HTMLElement,
  btnKakao2: document.querySelector('.kakao2') as HTMLElement,
  btnLink: document.querySelector('.link') as HTMLElement,
  resultTitle: document.querySelector('.result-title') as HTMLElement,
  resultSubTitle: document.querySelector('.result-subtitle') as HTMLElement,
  resultExplanation: document.querySelector('.result-explannation') as HTMLElement
};

export interface ShareData {
  title: string;
  description: string;
  explanation: string;
  currentUrl: string;
  resultImageUrl: string;
}

let shareData: ShareData = {
  title: '',
  description: '',
  explanation: '',
  currentUrl: '',
  resultImageUrl: ''
};

const initShareData = (): void => {
  shareData.title = elements.resultTitle.innerText;
  shareData.description = elements.resultSubTitle.innerText;
  shareData.explanation = elements.resultExplanation.innerText;
  shareData.currentUrl = location.href;
  
  // Get result ID from URL for the image
  const urlSegments = location.href.split('/');
  const resultId = urlSegments[urlSegments.length - 1];
  shareData.resultImageUrl = `https://martialartstest.com/static/images/preview-${resultId}.jpg`;
};

const shareTwitter = (): void => {
  const text = encodeURIComponent('격투기 종목 테스트');
  const url = encodeURIComponent(URLS.base);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
};

const shareFacebook = (): void => {
  const url = encodeURIComponent(URLS.base);
  window.open(`http://www.facebook.com/sharer/sharer.php?u=${url}`);
};

const shareKakao = (): void => {
  Kakao.Link.createDefaultButton({
    container: '#btnKakao1',
    objectType: 'feed',
    content: {
      title: '격투기 종목 테스트',
      description: '복싱, 주짓수, 태극권, 카포에라.. 나와 가장 잘 맞는 격투기 종목은?',
      imageUrl: URLS.image,
      link: {
        mobileWebUrl: URLS.base,
        webUrl: URLS.base
      }
    }
  });
};

const shareKakaoPersonalResult = (): void => {
  Kakao.Link.createDefaultButton({
    container: '#btnKakao2',
    objectType: 'feed',
    content: {
      title: `"${shareData.title}": ${shareData.description}`,
      description: shareData.explanation,
      imageUrl: shareData.resultImageUrl,
      link: {
        mobileWebUrl: shareData.currentUrl,
        webUrl: shareData.currentUrl
      }
    }
  });
};

const copyLinkToClipboard = (): void => {
  const tempInput = document.createElement('input');
  tempInput.value = URLS.base;
  
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  
  alert('링크가 복사되었습니다.');
};

const initShareButtons = (): void => {
  elements.btnTwitter.style.backgroundImage = 'url(../images/icon-twitter.png)';
  elements.btnFacebook.style.backgroundImage = 'url(../images/icon-facebook.png)';
  elements.btnKakao1.style.backgroundImage = 'url(../images/icon-kakao.png)';
  elements.btnKakao2.style.backgroundImage = 'url(../images/icon-kakao.png)';
  elements.btnLink.style.backgroundImage = 'url(../images/icon-link.png)';
  
  elements.btnTwitter.addEventListener('click', shareTwitter);
  elements.btnFacebook.addEventListener('click', shareFacebook);
  elements.btnKakao1.addEventListener('click', shareKakao);
  elements.btnKakao2.addEventListener('click', shareKakaoPersonalResult);
  elements.btnLink.addEventListener('click', copyLinkToClipboard);
};

const initShare = (): void => {
  if (!Kakao.isInitialized()) {
    Kakao.init('be836ab6aa99b7ff880010214a29ffd8');
  }
  
  initShareButtons();
  initShareData();
  
  shareKakao();
  shareKakaoPersonalResult();
};

if (elements.resultPage) {
  // initShare();
}