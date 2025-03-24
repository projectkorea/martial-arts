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
} 