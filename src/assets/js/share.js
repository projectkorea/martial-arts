const myURL = "https://www.martialartstest.com",
  resultPage = document.querySelector(".result-page"),
  btnTwitter = document.querySelector(".twitter"),
  btnFacebook = document.querySelector(".facebook"),
  btnKakao = document.querySelector(".kakao"),
  btnLink = document.querySelector(".link");

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
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "격투기 종목 테스트",
      description:
        "복싱, 주짓수, 태극권, 카포에라.. 나와 가장 잘 맞는 격투기 종목은?",
      imageUrl: myURL,
      link: {
        mobileWebUrl: myURL,
        webUrl: myURL,
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
    "url(../../static/images/icon-twitter.png)";
  btnFacebook.style.backgroundImage =
    "url(../../static/images/icon-facebook.png)";
  btnKakao.style.backgroundImage = "url(../../static/images/icon-kakao.png)";
  btnLink.style.backgroundImage = "url(../../static/images/icon-link.png)";
  btnTwitter.addEventListener("click", shareTwitter);
  btnFacebook.addEventListener("click", shareFacebook);
  btnKakao.addEventListener("click", shareKakao);
  btnLink.addEventListener("click", shareLink);
  shareKakao();
};

if (resultPage) {
  init();
}
