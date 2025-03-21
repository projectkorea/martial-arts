const hElements = {
  startPage: document.querySelector('.start-page') as HTMLElement,
  btnStart: document.querySelector('.start-btn') as HTMLElement,
  randomBtn: document.querySelector('.random') as HTMLElement
};

const MBTI_TYPES = [
  'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
  'ISTP', 'ISFP', 'INFP', 'INTP',
  'ESTP', 'ESFP', 'ENFP', 'ENTP',
  'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

const getRandomMBTIPath = (): string => {
  const randomIndex = Math.floor(Math.random() * MBTI_TYPES.length);
  return `/result/${MBTI_TYPES[randomIndex]}`;
};

const startTest = (): void => {
  location.href = '/question';
};

const startRandom = (): void => {
  location.href = getRandomMBTIPath();
};

const initStartPage = (): void => {
  hElements.btnStart.onclick = startTest;
  hElements.randomBtn.onclick = startRandom;
};

if (hElements.startPage) {
  initStartPage();
}