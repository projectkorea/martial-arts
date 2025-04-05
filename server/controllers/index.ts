import { Response, NextFunction } from 'express';
import MBTIResult from "../models/MBTIResult";
import MBTIStat from '../models/MBTIStat';
import { 
  PersonalityProps, 
  TypedRequestBody, 
  TypedRequestParams 
} from '../types';
import { ERROR_MESSAGES } from '../constants';
import { MBTI_TYPES } from '../router/constants';

interface MBTIPayload extends PersonalityProps {
  mbtiType: string;
}

export const saveResult = async (
  req: TypedRequestBody<MBTIPayload>, 
  res: Response, 
  next: NextFunction
): Promise<void> => {
  const { E, I, S, N, F, T, P, J, mbtiType } = req.body;

  try {
    await MBTIResult.create({
      score: { E, I, S, N, F, T, P, J },
      mbtiType,
    });

    await MBTIStat.findOneAndUpdate(
      { _id: mbtiType },
      { $inc: { count: 1 } },
      { upsert: true }
    );

    await MBTIStat.findOneAndUpdate(
      { _id: 'TOTAL' },
      { $inc: { count: 1 } },
      { upsert: true }
    );
    
    next();
    
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const redirectToResult = async (
  req: TypedRequestBody<MBTIPayload>, 
  res: Response
): Promise<void> => {
  try {
    const { mbtiType } = req.body;
    if (mbtiType) {
      res.json({ success: true, redirectUrl: `/result/${mbtiType}` });
    } else {
      res.status(404).json({ success: false, message: 'Invalid result type' });
    }
  } catch (error) {
    console.error(ERROR_MESSAGES.REDIRECT_ERROR, error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const checkValidType = (
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

export const getResultStats = async (
  req: TypedRequestParams<{ type: string }>, 
  res: Response
): Promise<void> => {
  try {
    const { type } = req.params;
    const typeStat = await MBTIStat.findById(type);
    const totalStat = await MBTIStat.findById('TOTAL');
    const typeCount = typeStat?.count ?? 0;
    const totalCount = totalStat?.count ?? 0;

    res.json({
      success: true,
      data: {
        type,
        typeCount,
        totalCount,
      }
    });
  } catch (error) {
    console.error(ERROR_MESSAGES.RENDER_ERROR, error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};