const elements = {
  resultPage: document.querySelector('.result-page') as HTMLElement,
  folderBtn: document.querySelector('.folder-button') as HTMLElement,
  folderContent: document.querySelector('.folder-content') as HTMLElement,
  folderFooter: document.querySelector('.folder-footer') as HTMLElement,
  folderBtnDown: document.querySelector('.folder-button-down') as HTMLElement
};

const toggleFolderOpen = (): void => {
  elements.folderBtn.style.display = 'none';
  elements.folderContent.style.display = 'block';
  elements.folderFooter.style.display = 'block';
};

const toggleFolderClosed = (): void => {
  elements.folderContent.style.display = 'none';
  elements.folderFooter.style.display = 'none';
  elements.folderBtn.style.display = 'block';
};

const initFolderToggle = (): void => {
  elements.folderBtn.onclick = toggleFolderOpen;
  elements.folderBtnDown.onclick = toggleFolderClosed;
};

if (elements.resultPage) {
  initFolderToggle();
}