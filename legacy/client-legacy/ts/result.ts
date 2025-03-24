const elements = {
  resultPage: document.querySelector('.result-page') as HTMLElement,
  loadingPage: document.querySelector('.loading-page') as HTMLElement,
  folderBtn: document.querySelector('.folder-button') as HTMLElement,
  folderContent: document.querySelector('.folder-content') as HTMLElement,
  folderFooter: document.querySelector('.folder-footer') as HTMLElement,
  folderBtnDown: document.querySelector('.folder-button-down') as HTMLElement,
  rank: document.querySelector('.rank') as HTMLElement,
  retest: document.querySelector('.retest-btn') as HTMLElement,
  totalNumber: document.querySelector('.total-number') as HTMLElement
};

const handleResultPageValue = (): void => {
  if (elements.totalNumber && elements.totalNumber.textContent) {
    elements.totalNumber.textContent = elements.totalNumber.textContent
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

const toggleFolder = (): void => {
  const isFolderOpen = elements.folderContent.style.display === 'block';
  elements.folderBtn.style.display = isFolderOpen ? 'block' : 'none';
  elements.folderContent.style.display = isFolderOpen ? 'none' : 'block';
  elements.folderFooter.style.display = isFolderOpen ? 'none' : 'block';
};

const initEventListeners = (): void => {
  elements.folderBtn.addEventListener('click', toggleFolder);
  elements.folderBtnDown.addEventListener('click', toggleFolder);
  if (elements.retest) {
    elements.retest.addEventListener('click', () => { location.href = '/mbti'; });
  }
};

if (elements.resultPage) {
  window.onload = function () {
    handleResultPageValue();
    initEventListeners();
    
    if (elements.loadingPage) {
      elements.loadingPage.style.display = 'none';
    }
    elements.resultPage.style.display = 'block';
  };
}