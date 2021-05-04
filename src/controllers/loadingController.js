import routes from "../routes";
import Result from "../models/Result";

export let totalNumber;
export let percentage;
export let finalResult;

let myOrder = 1;

export const savingDb = async (req, res, next) => {
  try {
    finalResult = req.body;
    const countNumber = await Result.countDocuments({}).exec();
    totalNumber = countNumber + 1;

    await Result.create({
      user: 1,
      score: req.body.SCORE,
      prop: {
        "CA": req.body.CA,
        "PO": req.body.PO,
        "AC": req.body.AC,
        "AW": req.body.AW,
      },
      result: req.body.RESULT,
    });
    next();
  } catch (error) {
    console.log(error);
  }
};

export const sortingDb = async (req, res, next) => {
  try {
    const sortedDb = await Result.find().sort({ score: -1 });
    sortedDb.some(function (item, index, _arr) {
      myOrder = index;
      return req.body.SCORE >= item.score;
    });
    percentage = ((myOrder / totalNumber) * 100).toFixed();
    next();
  } catch (error) {
    console.log(error);
  }
};

export const dividngResult = async (req, res) => {
  try {
    if (req.body.RESULT == "a") res.redirect(`${routes.result}${routes.a}`);
    else if (req.body.RESULT == "b")
      res.redirect(`${routes.result}${routes.b}`);
    else if (req.body.RESULT == "c")
      res.redirect(`${routes.result}${routes.c}`);
    else if (req.body.RESULT == "d")
      res.redirect(`${routes.result}${routes.d}`);
    else if (req.body.RESULT == "e")
      res.redirect(`${routes.result}${routes.e}`);
    else if (req.body.RESULT == "f")
      res.redirect(`${routes.result}${routes.f}`);
    else if (req.body.RESULT == "g")
      res.redirect(`${routes.result}${routes.g}`);
    else if (req.body.RESULT == "h")
      res.redirect(`${routes.result}${routes.h}`);
    else if (req.body.RESULT == "i")
      res.redirect(`${routes.result}${routes.i}`);
    else if (req.body.RESULT == "j")
      res.redirect(`${routes.result}${routes.j}`);
  } catch (error) {
    console.log(error);
  }
};
