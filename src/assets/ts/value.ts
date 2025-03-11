const resultPage = document.querySelector(".result-page"),
  folderBtn = document.querySelector(".folder-button"),
  folderContent = document.querySelector(".folder-content"),
  folderFooter = document.querySelector(".folder-footer"),
  folderBtnDown = document.querySelector(".folder-button-down");

const init = () => {
  folderBtn.onclick = () => {
    folderBtn.style.display = "none";
    folderContent.style.display = "block";
    folderFooter.style.display = "block";
  };
  folderBtnDown.onclick = () => {
    folderContent.style.display = "none";
    folderFooter.style.display = "none";
    folderBtn.style.display = "block";
  };
};

if (resultPage) {
  init();
}
