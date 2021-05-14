import { quest } from "./sentence";

const questionPage = document.querySelector(".question-page"),
  pageNum = document.querySelector(".progress-page-num"),
  progressBar = document.querySelector(".progress-bar"),
  question_wrapper = document.querySelector(".wrapper-question"),
  questionTitle = document.querySelector(".question-title"),
  questionBtn = document.querySelector(".question-btn"),
  A = document.querySelector("#A"),
  B = document.querySelector("#B");

let finalResult = {
    "E": 0,
    "I": 0,
    "S": 0,
    "N": 0,
    "F": 0,
    "T": 0,
    "P": 0,
    "J": 0,
    "RESULT": "",
  },
  page_num = 1;

const nextQuestion = () => {
  if (page_num <= 12) {
    questionTitle.innerHTML = quest[page_num]["title"];
    A.innerText = quest[page_num]["A"]["text"];
    B.innerText = quest[page_num]["B"]["text"];
    questionAnimation();
    progressAnimation();
  } else {
    saveType();
    postToUrl("/loading", finalResult);
  }
};

const removeFadeIn = () => {
  question_wrapper.classList.remove("fade-in");
  questionBtn.classList.remove("fade-in");
};

const clickFunction = (e) => {
  e.target.style.background = "#ff7d4d";
  let idValue = e.target.id;
  let type = quest[page_num][idValue]["type"];

  A.disabled = "true";
  B.disabled = "true";

  if (type != null) finalResult[type] += 1;

  setTimeout(() => {
    e.target.style.background = "";
    page_num++;
    A.removeAttribute("disabled");
    B.removeAttribute("disabled");
    nextQuestion();
  }, 300);
};

const postToUrl = (path, params, method) => {
  method = method || "post";
  const form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);
  for (const key in params) {
    const hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
};

const saveType = () => {
  if (finalResult["E"] > finalResult["I"]) finalResult["RESULT"] += "E";
  else finalResult["RESULT"] += "I";
  if (finalResult["S"] > finalResult["N"]) finalResult["RESULT"] += "S";
  else finalResult["RESULT"] += "N";
  if (finalResult["F"] > finalResult["T"]) finalResult["RESULT"] += "F";
  else finalResult["RESULT"] += "T";
  if (finalResult["P"] > finalResult["J"]) finalResult["RESULT"] += "P";
  else finalResult["RESULT"] += "J";
};

const progressAnimation = () => {
  pageNum.innerText = `${page_num} / 12`;
  if (page_num == 1) progressBar.style.width = "8.3%";
  else if (page_num == 2) progressBar.style.width = "16.6%";
  else if (page_num == 3) progressBar.style.width = "24.9%";
  else if (page_num == 4) progressBar.style.width = "33.2%";
  else if (page_num == 5) progressBar.style.width = "41.5%";
  else if (page_num == 6) progressBar.style.width = "49.8%";
  else if (page_num == 7) progressBar.style.width = "58.1%";
  else if (page_num == 8) progressBar.style.width = "66.4%";
  else if (page_num == 9) progressBar.style.width = "74.7%";
  else if (page_num == 10) progressBar.style.width = "83%";
  else if (page_num == 11) progressBar.style.width = "91.3%";
  else if (page_num == 12) progressBar.style.width = "100%";
};

const questionAnimation = () => {
  questionBtn.style.opacity = "0";
  question_wrapper.classList.add("fade-in");
  A.style.pointerEvents = "none";
  B.style.pointerEvents = "none";

  setTimeout(() => {
    questionBtn.style.opacity = "1";
    questionBtn.classList.add("fade-in");
    A.style.pointerEvents = "auto";
    B.style.pointerEvents = "auto";
    setTimeout(removeFadeIn, 1000);
  }, 300);

  setTimeout(() => {
    A.addEventListener("click", clickFunction, { once: true });
    B.addEventListener("click", clickFunction, { once: true });
  }, 1300);
};

const init = () => {
  nextQuestion();
};

if (questionPage) {
  init();
}
