import { Router } from 'express';
import {
  saveResultToDB,
  redirectBasedOnResult,
  validateMBTIType,
  renderMBTIResult,
} from '../controllers';

const router = Router();

router.post('/result', saveResultToDB, redirectBasedOnResult);
router.get('/result/:type', validateMBTIType, renderMBTIResult);

export default router;