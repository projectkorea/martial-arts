import { quest } from "./sentence";

const question_page = document.querySelector(".question_page"),
  loading_page = document.querySelector(".loading_page"),
  question_wrapper = document.querySelector(".question_wrapper"),
  title = document.querySelector(".question_title"),
  btn_wrapper = document.querySelector(".question_btn_wrapper"),
  A = document.querySelector("#A"),
  B = document.querySelector("#B"),
  p_num = document.querySelector("#p_num"),
  run_img = document.querySelector("#run"),
  heart_img = document.querySelector("#heart"),
  ground = document.querySelector("#ground");

let finalResult = {
    "CA": 0,
    "PO": 0,
    "AC": 0,
    "AW": 0,
    "SCORE": 0,
    "RESULT": "",
  },
  page_num = 1,
  run_pos = 1,
  heart_opa = 5;

const removeFadeIn = () => {
  question_wrapper.classList.remove("fade-in");
  btn_wrapper.classList.remove("fade-in");
};

const clickFunction = (e) => {
  let idValue = e.target.id;

  A.disabled = "true";
  B.disabled = "true";

  let typeResult = quest[page_num][idValue]["type"];

  if (typeResult != null) finalResult[typeResult] += 1;
  finalResult["SCORE"] += quest[page_num][idValue]["score"];

  setTimeout(() => {
    e.target.classList.add("bold");
  }, 100);

  e.target.classList.add("magnifyBorder");
  setTimeout(() => {
    e.target.classList.remove("magnifyBorder");
    e.target.classList.remove("bold");
    page_num++;

    A.removeAttribute("disabled");
    B.removeAttribute("disabled");

    nextQuestion();
  }, 500);
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
  if (finalResult["SCORE"] >= 13) finalResult["RESULT"] = "a";
  else if (finalResult["SCORE"] >= 11) finalResult["RESULT"] = "b";
  else if (finalResult["SCORE"] >= 9) finalResult["RESULT"] = "c";
  else if (finalResult["SCORE"] >= 7) finalResult["RESULT"] = "d";
  else if (finalResult["SCORE"] >= 5) finalResult["RESULT"] = "e";
  else if (finalResult["SCORE"] >= 3) finalResult["RESULT"] = "f";
  else if (finalResult["SCORE"] >= 1) finalResult["RESULT"] = "g";
  else if (finalResult["SCORE"] >= 0) finalResult["RESULT"] = "h";
  else if (finalResult["SCORE"] >= -1) finalResult["RESULT"] = "i";
  else if (finalResult["SCORE"] >= -2) finalResult["RESULT"] = "j";
};

const nextQuestion = () => {
  if (page_num <= 12) {
    btn_wrapper.style.opacity = "0";
    question_wrapper.classList.add("fade-in");
    setTimeout(() => {
      btn_wrapper.classList.add("fade-in");
      btn_wrapper.style.opacity = "1";
      setTimeout(removeFadeIn, 200);
    }, 300);

    title.innerHTML = quest[page_num]["title"];
    A.innerText = quest[page_num]["A"]["text"];
    B.innerText = quest[page_num]["B"]["text"];

    if (btn_wrapper) {
      setTimeout(() => {
        A.addEventListener("click", clickFunction, { once: true });
        B.addEventListener("click", clickFunction, { once: true });
      }, 500);
    }
    progressAnimation();
  } else {
    saveType();
    postToUrl("/loading", finalResult);
    question_page.style.display = "none";
    loading_page.style.display = "flex";
  }
};

const progressAnimation = () => {
  p_num.innerText = `${page_num} / 12`;
  run_img.style.left = `${(run_pos += (ground.clientWidth - 33) / 12)}px`;
  heart_img.style.opacity = `${(heart_opa += 6)}%`;
};

const heartAnimation = () => {
  let flag = 1;
  setInterval(() => {
    if (flag == 1) heart_img.style.transform = "scale(1)";
    else heart_img.style.transform = "scale(0.8)";
    flag *= -1;
  }, 1000);
};

const init = () => {
  loading_page.style.display = "none";
  heartAnimation();
  nextQuestion();
};

if (question_page) {
  init();
}
