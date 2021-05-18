import routes from "../routes";
import Result from "../models/MartialArtsResult";

export const savingDb = async (req, res, next) => {
  try {
    await Result.create({
      prop: {
        E: req.body.E,
        I: req.body.I,
        S: req.body.S,
        N: req.body.N,
        F: req.body.F,
        T: req.body.T,
        P: req.body.P,
        J: req.body.J,
      },
      result: req.body.RESULT,
    });
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};

export const dividngResult = async (req, res) => {
  try {
    if (req.body.RESULT == "ESTJ")
      res.redirect(`${routes.result}${routes.estj}`);
    else if (req.body.RESULT == "ISTJ")
      res.redirect(`${routes.result}${routes.istj}`);
    else if (req.body.RESULT == "ESFJ")
      res.redirect(`${routes.result}${routes.esfj}`);
    else if (req.body.RESULT == "ISFJ")
      res.redirect(`${routes.result}${routes.isfj}`);
    else if (req.body.RESULT == "ESTP")
      res.redirect(`${routes.result}${routes.estp}`);
    else if (req.body.RESULT == "ISTP")
      res.redirect(`${routes.result}${routes.istp}`);
    else if (req.body.RESULT == "ESFP")
      res.redirect(`${routes.result}${routes.esfp}`);
    else if (req.body.RESULT == "ISFP")
      res.redirect(`${routes.result}${routes.isfp}`);
    else if (req.body.RESULT == "ENTJ")
      res.redirect(`${routes.result}${routes.entj}`);
    else if (req.body.RESULT == "INTJ")
      res.redirect(`${routes.result}${routes.intj}`);
    else if (req.body.RESULT == "ENFJ")
      res.redirect(`${routes.result}${routes.enfj}`);
    else if (req.body.RESULT == "INFJ")
      res.redirect(`${routes.result}${routes.infj}`);
    else if (req.body.RESULT == "ENTP")
      res.redirect(`${routes.result}${routes.entp}`);
    else if (req.body.RESULT == "INTP")
      res.redirect(`${routes.result}${routes.intp}`);
    else if (req.body.RESULT == "ENFP")
      res.redirect(`${routes.result}${routes.enfp}`);
    else if (req.body.RESULT == "INFP")
      res.redirect(`${routes.result}${routes.infp}`);
  } catch (error) {
    console.log(error);
  }
};
