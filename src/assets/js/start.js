const btnStart = document.querySelector(".start-btn"),
  startPage = document.querySelector(".start-page");

const init = () => {
  btnStart.onclick = () => {
    location.href = "/question";
  };
};

if (startPage) {
  init();
}
