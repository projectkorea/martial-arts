import { property, title } from "./sentence";

const charName = document.querySelector(".char_name"),
  charPic = document.querySelector(".char_pic"),
  abilityTip = document.querySelector(".ability_tip"),
  result_page = document.querySelector(".result_page"),
  CABar = document.querySelector(".bar_CA"),
  POBar = document.querySelector(".bar_PO"),
  ACBar = document.querySelector(".bar_AC"),
  AWBar = document.querySelector(".bar_AW");

let finalResult = {
  "SCORE": 0,
  "CA": 0,
  "PO": 0,
  "AC": 0,
  "AW": 0,
};

const getFromServer = () => {
  const serverData = document.querySelector(".result-server");
  serverData.style.display = "none";
  const splitData = serverData.innerHTML.split("/");
  finalResult["SCORE"] = splitData[0];
  finalResult["CA"] = splitData[1];
  finalResult["PO"] = splitData[2];
  finalResult["AC"] = splitData[3];
  finalResult["AW"] = splitData[4];
};

const valueTitle = () => {
  const score = finalResult["SCORE"];
  if (score == 12) {
    charName.innerText = title["1"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 10) {
    charName.innerText = title["2"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 8) {
    charName.innerText = title["3"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 6) {
    charName.innerText = title["4"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 4) {
    charName.innerText = title["5"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 2) {
    charName.innerText = title["6"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= 0) {
    charName.innerText = title["7"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score >= -2) {
    charName.innerText = title["8"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  } else if (score == -3) {
    charName.innerText = title["9"];
    charPic.src = "../../static/images/Avocado_Fitness.png";
  }
};

const valueProperty = () => {
  const CA = finalResult["CA"],
    PO = finalResult["PO"],
    AC = finalResult["AC"],
    AW = finalResult["AW"];

  if (CA == 0 && PO == 3 && AC == 3 && AW == 3) {
    abilityTip.innerText = property["1"];
    CABar.style.width = "100%";
    POBar.style.width = "100%";
    ACBar.style.width = "100%";
    AWBar.style.width = "100%";
  } else if (CA == 3 && PO == -3 && AC == 0 && AW == 0) {
    abilityTip.innerText = property["2"];
    CABar.style.width = "25%";
    POBar.style.width = "25%";
    ACBar.style.width = "25%";
    AWBar.style.width = "25%";
  } else {
    if (CA == 0) {
      abilityTip.innerText += property["CA"]["0"];
      CABar.style.width = "10%";
    } else if (CA == 1) {
      abilityTip.innerText += property["CA"]["1"];
      CABar.style.width = "30%";
    } else if (CA == 2) {
      abilityTip.innerText += property["CA"]["2"];
      CABar.style.width = "70%";
    } else if (CA == 3) {
      abilityTip.innerText += property["CA"]["2"];
      CABar.style.width = "100%";
    }

    if (PO == 0) {
      abilityTip.innerText += property["PO"]["0"];
      POBar.style.width = "10%";
    } else if (PO == 1) {
      abilityTip.innerText += property["PO"]["1"];
      POBar.style.width = "30%";
    } else if (PO == 2) {
      abilityTip.innerText += property["PO"]["2"];
      POBar.style.width = "70%";
    } else if (PO == 3) {
      abilityTip.innerText += property["PO"]["2"];
      POBar.style.width = "100%";
    }

    if (AC == 0) {
      abilityTip.innerText += property["AC"]["0"];
      ACBar.style.width = "10%";
    } else if (AC == 1) {
      abilityTip.innerText += property["AC"]["1"];
      ACBar.style.width = "30%";
    } else if (AC == 2) {
      abilityTip.innerText += property["AC"]["2"];
      ACBar.style.width = "70%";
    } else if (AC == 3) {
      abilityTip.innerText += property["AC"]["2"];
      ACBar.style.width = "100%";
    }

    if (AW == 0) {
      abilityTip.innerText += property["AW"]["0"];
      AWBar.style.width = "10%";
    } else if (AW == 1) {
      abilityTip.innerText += property["AW"]["1"];
      AWBar.style.width = "30%";
    } else if (AW == 2) {
      abilityTip.innerText += property["AW"]["2"];
      AWBar.style.width = "70%";
    } else if (AW == 3) {
      abilityTip.innerText += property["AW"]["2"];
      AWBar.style.width = "100%";
    }
  }
};

if (result_page) {
  getFromServer();
  valueTitle();
  valueProperty();
}
