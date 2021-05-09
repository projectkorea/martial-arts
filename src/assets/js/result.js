const rank = document.querySelector(".rank"),
  resultTop = document.querySelector(".result-top"),
  resultMiddle = document.querySelector(".result-middle"),
  resultBottom = document.querySelector(".result-bottom"),
  result_wrapper = document.querySelector(".result_wrapper"),
  retest = document.querySelector(".retest-btn"),
  resultPage = document.querySelector(".result-page");

const init = () => {
  retest.addEventListener("click", () => {
    location.href = "/";
  });
};

if (resultPage) {
  init();
}
