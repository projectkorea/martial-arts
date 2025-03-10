const myURL = "https://www.martialartstest.com",
  imgURL = "https://martialartstest.com/static/images/kakao-preview.jpg",
  resultPage = document.querySelector(".result-page"),
  btnTwitter = document.querySelector(".twitter"),
  btnFacebook = document.querySelector(".facebook"),
  btnKakao1 = document.querySelector(".kakao1"),
  btnKakao2 = document.querySelector(".kakao2"),
  btnLink = document.querySelector(".link"),
  resultTitle = document.querySelector(".result-title"),
  resultSubTitle = document.querySelector(".result-subtitle"),
  resultExplannation = document.querySelector(".result-explannation");

let TITLE, DESCRIPTION, imgURLKakao, myURLKakao, EXPLANNATION;

const valueResult = () => {
  TITLE = resultTitle.innerText;
  DESCRIPTION = resultSubTitle.innerText;
  myURLKakao = location.href;
  const array = location.href.split("/");
  let lastSegment = array[array.length - 1];
  imgURLKakao = `https://martialartstest.com/static/images/preview-${lastSegment}.jpg`;
  EXPLANNATION = resultExplannation.innerText;
};

const shareTwitter = () => {
  const sendText = "격투기 종목 테스트";
  const sendUrl = myURL;
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
};

const shareFacebook = () => {
  const sendUrl = myURL;
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

const shareKakao = () => {
  Kakao.Link.createDefaultButton({
    container: "#btnKakao1", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "격투기 종목 테스트",
      description:
        "복싱, 주짓수, 태극권, 카포에라.. 나와 가장 잘 맞는 격투기 종목은?",
      imageUrl: imgURL,
      link: {
        mobileWebUrl: myURL,
        webUrl: myURL,
      },
    },
  });
};

const shareKakaoMyData = () => {
  Kakao.Link.createDefaultButton({
    container: "#btnKakao2", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: `"${TITLE}": ${DESCRIPTION}`,
      description: EXPLANNATION,
      imageUrl: imgURLKakao,
      link: {
        mobileWebUrl: myURLKakao,
        webUrl: myURLKakao,
      },
    },
  });
};

const shareLink = () => {
  const dummy = document.createElement("input");
  const text = myURL;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("링크가 복사되었습니다.");
};

const init = () => {
  Kakao.init("be836ab6aa99b7ff880010214a29ffd8");
  btnTwitter.style.backgroundImage =
    "url(..//images/icon-twitter.png)";
  btnFacebook.style.backgroundImage =
    "url(..//images/icon-facebook.png)";
  btnKakao1.style.backgroundImage = "url(..//images/icon-kakao.png)";
  btnKakao2.style.backgroundImage = "url(..//images/icon-kakao.png)";
  btnLink.style.backgroundImage = "url(..//images/icon-link.png)";
  btnTwitter.addEventListener("click", shareTwitter);
  btnFacebook.addEventListener("click", shareFacebook);
  btnKakao1.addEventListener("click", shareKakao);
  btnKakao2.addEventListener("click", shareKakaoMyData);
  btnLink.addEventListener("click", shareLink);
  shareKakao();
  valueResult();
  shareKakaoMyData();
};

if (resultPage) {
  init();
}
