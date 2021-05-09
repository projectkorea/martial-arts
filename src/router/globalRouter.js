import express from "express";
import routes from "../routes";
import { home } from "../controllers/homeController";
import { question } from "../controllers/questionController";
import { savingDb, dividngResult } from "../controllers/loadingController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.question, question);
globalRouter.post(routes.loading, savingDb, dividngResult);

export default globalRouter;
