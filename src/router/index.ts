import { Router } from 'express';
import {
  renderHomePage,
  renderQuestionPage,
  saveResultToDB,
  redirectBasedOnResult,
  validateMBTIType,
  renderMBTIResult,
} from '../controllers';

const mbtiTypes = {
  estj: 'wrestling',
  istj: 'judo',
  esfj: 'taekwondo',
  isfj: 'hapkido',
  estp: 'mma',
  istp: 'boxing',
  esfp: 'wushu',
  isfp: 'kendo',
  entj: 'kravmaga',
  intj: 'archery',
  enfj: 'taichi',
  infj: 'aikido',
  entp: 'jiujitsu',
  intp: 'fencing',
  enfp: 'capoeira',
  infp: 'baguazhang',
};

const baseRoutes = {
  home: '/',
  loading: '/loading',
  question: '/question',
  result: '/result/:type',
};

const HOME = baseRoutes.home;
const QUESTION = baseRoutes.question;
const LOADING = baseRoutes.loading;
const RESULT = baseRoutes.result;

const mbtiRouter = Router();

mbtiRouter.get(HOME, renderHomePage);
mbtiRouter.get(QUESTION, renderQuestionPage);
mbtiRouter.post(LOADING, saveResultToDB, redirectBasedOnResult);
mbtiRouter.get(RESULT, validateMBTIType, renderMBTIResult);

export default mbtiRouter;