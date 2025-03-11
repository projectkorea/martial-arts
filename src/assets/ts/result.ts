const rank = document.querySelector(".rank"),
  retest = document.querySelector(".retest-btn"),
  totalNumber = document.querySelector(".total-number"),
  resultPage = document.querySelector(".result-page"),
  loadingPage = document.querySelector(".loading-page");

const waitUntilLoading = () => {
  window.onload = function () {
    valueResultPage();
    loadingPage.style.display = "none";
    resultPage.style.display = "block";
  };
};

const valueResultPage = () => {
  retest.addEventListener("click", () => {
    location.href = "/";
  });
  totalNumber.innerText = totalNumber.innerText
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

if (resultPage) {
  loadingPage.style.display = "block";
  waitUntilLoading();
}
