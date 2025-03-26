import { Response, NextFunction } from 'express';
import MartialArtsResult from "../models/MartialArtsResult";
import { 
  PersonalityProps, 
  IMartialArtsResult, 
  TypedRequestBody, 
  TypedRequestParams 
} from '../types';
import { ERROR_MESSAGES } from '../constants';
import { MBTI_TYPES } from '../router/constants';
interface MBTIPayload extends PersonalityProps {
  RESULT: string;
}

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
      res.json({ success: true, redirectUrl: `/result/${type}` });
    } else {
      res.status(404).json({ success: false, message: 'Invalid result type' });
    }
  } catch (error) {
    console.error(ERROR_MESSAGES.REDIRECT_ERROR, error);
    res.status(500).json({ success: false, message: 'Internal server error' });
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
    res.status(404).json({ success: false, message: 'Invalid MBTI type' });
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

    res.json({
      success: true,
      data: {
        type,
        sameNumber,
        totalNumber,
        percentage: (sameNumber / totalNumber) * 100
      }
    });
  } catch (error) {
    console.error(ERROR_MESSAGES.RENDER_ERROR, error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
