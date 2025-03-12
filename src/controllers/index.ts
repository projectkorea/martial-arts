import { Request, Response, NextFunction } from 'express';
import MartialArtsResult from "../models/MartialArtsResult";
import { 
  PersonalityProps, 
  IMartialArtsResult, 
  TypedRequestBody, 
  TypedRequestParams 
} from '../types';
import { MBTI_TYPES, ERROR_MESSAGES } from '../constants';

interface MBTIPayload extends PersonalityProps {
  RESULT: string;
}

export const renderHomePage = (_: Request, res: Response): void => {
  res.render('home');
};

export const renderQuestionPage = (_: Request, res: Response): void => {
  res.render('question');
};

export const saveResultToDB = async (
  req: TypedRequestBody<MBTIPayload>, 
  res: Response, 
  next: NextFunction
): Promise<void> => {
  const { E, I, S, N, F, T, P, J, RESULT } = req.body;

  try {
    await MartialArtsResult.create({
      prop: { E, I, S, N, F, T, P, J },
      result: RESULT,
    });
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const redirectBasedOnResult = async (
  req: TypedRequestBody<MBTIPayload>, 
  res: Response
): Promise<void> => {
  try {
    const { RESULT: type } = req.body;
    if (type) {
      res.redirect(`result/${type}`);
    } else {
      res.status(404).redirect('/mbti');
    }
  } catch (error) {
    console.error(ERROR_MESSAGES.REDIRECT_ERROR, error);
    res.status(500).redirect('/');
  }
};

export const validateMBTIType = (
  req: TypedRequestParams<{ type: string }>, 
  res: Response, 
  next: NextFunction
): void => {
  const { type } = req.params;
  const path = type.toLowerCase();
  
  if (MBTI_TYPES.hasOwnProperty(path)) {
    next();
  } else {
    res.status(404).redirect('/mbti');
  }
};

export const renderMBTIResult = async (
  req: TypedRequestParams<{ type: string }>, 
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;
    const sameNumber = await MartialArtsResult.countDocuments({
      result: type,
    });
    const totalNumber = await MartialArtsResult.countDocuments({});
    const pageName = `result${type}`;

    res.render(pageName, { totalNumber, sameNumber });
  } catch (error) {
    console.error(ERROR_MESSAGES.RENDER_ERROR, error);
    res.redirect('/');
  }
};
