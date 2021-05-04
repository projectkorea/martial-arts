const myURL = "https://www.whenismylove.com",
  result_page = document.querySelector(".result_page"),
  btnTwitter = document.querySelector("#btnTwitter"),
  btnFacebook = document.querySelector("#btnFacebook"),
  btnKakao = document.querySelector("#btnKakao"),
  btnLink = document.querySelector("#btnLink");

const shareTwitter = () => {
  const sendText = "솔로탈출 테스트";
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
      title: "솔로탈출 테스트",
      description: "솔로탈출 테스트",
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
  alert("링크가 복사되었습니다.");
};

const init = () => {
  btnTwitter.addEventListener("click", shareTwitter);
  btnFacebook.addEventListener("click", shareFacebook);
  btnKakao.addEventListener("click", shareKakao);
  btnLink.addEventListener("click", shareLink);
};

if (result_page) {
  init();
}
