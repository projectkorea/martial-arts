const myURL = "https://www.whenismylove.com",
  resultPage = document.querySelector(".result-page"),
  btnTwitter = document.querySelector(".twitter"),
  btnFacebook = document.querySelector(".facebook"),
  btnKakao = document.querySelector(".kakao"),
  btnLink = document.querySelector(".link");

const shareTwitter = () => {
  const sendText = "격투기 테스트";
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
  Kakao.init("385da167d8702da5c0abc1de73b3a36e");
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "격투기 테스트",
      description: "나랑 가장 잘 맞는 격투기 종목은 무엇일까?",
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
  const text = location.href;
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("링크가 복사되었습니다");
};

const init = () => {
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
};

if (resultPage) {
  init();
}
