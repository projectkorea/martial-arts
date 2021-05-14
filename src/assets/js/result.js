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
  const totalNumber1 = totalNumber.innerText;
  const totalNumber2 = totalNumber1
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  totalNumber.innerText = totalNumber2;
};

if (resultPage) {
  resultPage.style.display = "none";
  waitUntilLoading();
}
