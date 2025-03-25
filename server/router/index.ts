import { Router } from 'express';
import {
  saveResultToDB,
  redirectBasedOnResult,
  validateMBTIType,
  renderMBTIResult,
} from '../controllers';
import { Routes } from '../constants';

const mbtiRouter = Router();

mbtiRouter.post('/api/result', saveResultToDB, redirectBasedOnResult);
mbtiRouter.get('/api/result/:type', validateMBTIType, renderMBTIResult);

export default mbtiRouter;