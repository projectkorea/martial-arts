import { Router } from 'express';
import {
  renderHomePage,
  renderQuestionPage,
  saveResultToDB,
  redirectBasedOnResult,
  validateMBTIType,
  renderMBTIResult,
} from '../controllers';
import { Routes } from '../constants';

const mbtiRouter = Router();

mbtiRouter.get(Routes.HOME, renderHomePage);
mbtiRouter.get(Routes.QUESTION, renderQuestionPage);
mbtiRouter.post(Routes.LOADING, saveResultToDB, redirectBasedOnResult);
mbtiRouter.get(Routes.RESULT, validateMBTIType, renderMBTIResult);

export default mbtiRouter;