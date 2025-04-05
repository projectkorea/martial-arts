import { Router } from 'express';
import {
  saveResult,
  redirectToResult,
  checkValidType,
  getResultStats,
} from '../controllers';

const router = Router();

router.post('/result', saveResult, redirectToResult);
router.get('/result/:type', checkValidType, getResultStats);

export default router;