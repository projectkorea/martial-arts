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
};
