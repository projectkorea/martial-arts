import Result from "../models/MartialArtsResult";

export const resultESTJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ESTJ" }).exec();
    res.render("resultESTJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultISTJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ISTJ" }).exec();
    res.render("resultISTJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultESFJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ESFJ" }).exec();
    res.render("resultESFJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultISFJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ISFJ" }).exec();
    res.render("resultISFJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultESTP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ESTP" }).exec();
    res.render("resultESTP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultISTP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ISTP" }).exec();
    res.render("resultISTP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultESFP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ESFP" }).exec();
    res.render("resultESFP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultISFP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ISFP" }).exec();
    res.render("resultISFP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultENTJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ENTJ" }).exec();
    res.render("resultENTJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultINTJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "INTJ" }).exec();
    res.render("resultINTJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultENFJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ENFJ" }).exec();
    res.render("resultENFJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultINFJ = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "INFJ" }).exec();
    res.render("resultINFJ", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultENTP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ENTP" }).exec();
    res.render("resultENTP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultINTP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "INTP" }).exec();
    res.render("resultINTP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultENFP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "ENFP" }).exec();
    res.render("resultENFP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};

export const resultINFP = async (req, res) => {
  try {
    const totalNumber = await Result.countDocuments({}).exec();
    const sameNumber = await Result.countDocuments({ result: "INFP" }).exec();
    res.render("resultINFP", { totalNumber, sameNumber });
  } catch (error) {
    console.log(error);
  }
};
