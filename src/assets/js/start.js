const btnStart = document.querySelector(".start-btn"),
  startPage = document.querySelector(".start-page");

const init = () => {
  btnStart.addEventListener("click", () => {
    setTimeout(() => {
      location.href = "/question";
    }, 100);
  });
};

if (startPage) {
  init();
}
