import express from "express";
import routes from "../routes";
import { result } from "../controllers/resultController";

const resultRouter = express.Router();

resultRouter.get(routes.a, result);
resultRouter.get(routes.b, result);
resultRouter.get(routes.c, result);
resultRouter.get(routes.d, result);
resultRouter.get(routes.e, result);
resultRouter.get(routes.f, result);
resultRouter.get(routes.g, result);
resultRouter.get(routes.h, result);
resultRouter.get(routes.i, result);
resultRouter.get(routes.j, result);

export default resultRouter;
