import express from "express";
import routes from "../routes";
import {
  resultESTJ,
  resultISTJ,
  resultESFJ,
  resultISFJ,
  resultESTP,
  resultISTP,
  resultESFP,
  resultISFP,
  resultENTJ,
  resultINTJ,
  resultENFJ,
  resultINFJ,
  resultENTP,
  resultINTP,
  resultENFP,
  resultINFP,
} from "../controllers/resultController";

const resultRouter = express.Router();

resultRouter.get(routes.estj, resultESTJ);
resultRouter.get(routes.istj, resultISTJ);
resultRouter.get(routes.esfj, resultESFJ);
resultRouter.get(routes.isfj, resultISFJ);
resultRouter.get(routes.estp, resultESTP);
resultRouter.get(routes.istp, resultISTP);
resultRouter.get(routes.esfp, resultESFP);
resultRouter.get(routes.isfp, resultISFP);
resultRouter.get(routes.entj, resultENTJ);
resultRouter.get(routes.intj, resultINTJ);
resultRouter.get(routes.enfj, resultENFJ);
resultRouter.get(routes.infj, resultINFJ);
resultRouter.get(routes.entp, resultENTP);
resultRouter.get(routes.intp, resultINTP);
resultRouter.get(routes.enfp, resultENFP);
resultRouter.get(routes.infp, resultINFP);

export default resultRouter;
