import { quest } from './sentence';

interface PersonalityResult {
  E: number;
  I: number;
  S: number;
  N: number;
  F: number;
  T: number;
  P: number;
  J: number;
  RESULT: string;
}

const elements = {
  questionPage: document.querySelector('.question-page') as HTMLElement,
  loadingPage: document.querySelector('.loading-page') as HTMLElement,
  pageNum: document.querySelector('.progress-page-num') as HTMLElement,
  progressBar: document.querySelector('.progress-bar') as HTMLElement,
  questionWrapper: document.querySelector('.wrapper-question') as HTMLElement,
  questionTitle: document.querySelector('.question-title') as HTMLElement,
  questionBtn: document.querySelector('.question-btn') as HTMLElement,
  optionA: document.querySelector('#A') as HTMLElement,
  optionB: document.querySelector('#B') as HTMLElement
};

// State
let finalResult: PersonalityResult = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  F: 0,
  T: 0,
  P: 0,
  J: 0,
  RESULT: ''
};
let currentPage = 1;

const showNextQuestion = (): void => {
  if (currentPage <= 12) {
    const current = quest[currentPage];
    elements.questionTitle.innerHTML = current.title;
    elements.optionA.innerText = current.A.text;
    elements.optionB.innerText = current.B.text;
    
    animateQuestion();
    updateProgress();
  } else {
    finishQuiz();
  }
};

const animateQuestion = (): void => {
  elements.questionBtn.style.opacity = '0';
  elements.questionWrapper.classList.add('fade-in');
  elements.optionA.style.pointerEvents = 'none';
  elements.optionB.style.pointerEvents = 'none';

  setTimeout(() => {
    elements.questionBtn.style.opacity = '1';
    elements.questionBtn.classList.add('fade-in');
    elements.optionA.style.pointerEvents = 'auto';
    elements.optionB.style.pointerEvents = 'auto';
    
    setTimeout(removeFadeIn, 500);
  }, 300);
};

const removeFadeIn = (): void => {
  elements.questionWrapper.classList.remove('fade-in');
  elements.questionBtn.classList.remove('fade-in');
  
  elements.optionA.addEventListener('click', handleOptionClick, { once: true });
  elements.optionB.addEventListener('click', handleOptionClick, { once: true });
};

const handleOptionClick = (event: MouseEvent): void => {
  const target = event.target as HTMLElement;
  target.style.background = '#ff7d4d';
  const optionId = target.id;
  const type = quest[currentPage][optionId].type;

  elements.optionA.setAttribute('disabled', 'true');
  elements.optionB.setAttribute('disabled', 'true');

  if (type) {
    finalResult[type as keyof Omit<PersonalityResult, 'RESULT'>] += 1;
  }

  setTimeout(() => {
    target.style.background = '';
    currentPage++;
    
    elements.optionA.removeAttribute('disabled');
    elements.optionB.removeAttribute('disabled');
    
    showNextQuestion();
  }, 300);
};

const updateProgress = (): void => {
  elements.pageNum.innerText = `${currentPage} / 12`;
  const progressPercentage = (currentPage / 12) * 100;
  elements.progressBar.style.width = `${progressPercentage}%`;
};

const calculateResult = (): void => {
  finalResult.RESULT = '';
  finalResult.RESULT += finalResult.E > finalResult.I ? 'E' : 'I';
  finalResult.RESULT += finalResult.S > finalResult.N ? 'S' : 'N';
  finalResult.RESULT += finalResult.F > finalResult.T ? 'F' : 'T';
  finalResult.RESULT += finalResult.P > finalResult.J ? 'P' : 'J';
};

const finishQuiz = (): void => {
  elements.questionPage.style.display = 'none';
  elements.loadingPage.style.display = 'block';
  
  calculateResult();
  postToUrl('/loading', finalResult);
};

const postToUrl = (path: string, params: Record<string, any>, method: string = 'post'): void => {
  const form = document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', path);
  
  Object.entries(params).forEach(([key, value]) => {
    const hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    hiddenField.setAttribute('name', key);
    hiddenField.setAttribute('value', value.toString());
    form.appendChild(hiddenField);
  });
  
  document.body.appendChild(form);
  form.submit();
};

if (elements.questionPage) {
  showNextQuestion();
}