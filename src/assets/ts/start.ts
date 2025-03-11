const startPage = document.querySelector(".start-page"),
  btnStart = document.querySelector(".start-btn"),
  randomBtn = document.querySelector(".random");

function getRandomMBTIPath() {
  const mbtiTypes = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
  const randomIndex = Math.floor(Math.random() * mbtiTypes.length);
  return "/result/" + mbtiTypes[randomIndex];
}

const init = () => {
  btnStart.onclick = () => {
    location.href = "/question";
  };
  randomBtn.onclick = () => {
    location.href = getRandomMBTIPath();
  };  
};

if (startPage) {
  init();
}
