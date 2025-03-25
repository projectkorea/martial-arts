type MBTIResultMap = {
  [key: string]: string;
};

export enum Routes {
  HOME = '/',
  QUESTION = '/question',
  LOADING = '/loading',
  RESULT = '/result/:type',
}

export const MBTI_TYPES: MBTIResultMap = {
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

export const ERROR_MESSAGES = {
  DB_CONNECTION: '❌ Error on DB Connection:',
  MISSING_MONGO_URL: '❌ Missing MONGO_URL_MBTI environment variable',
  REDIRECT_ERROR: 'Error redirecting based on result:',
  RENDER_ERROR: 'Error rendering MBTI result:',
  INITIAL_CONNECTION: 'Initial connection error:',
};

export const SUCCESS_MESSAGES = {
  DB_CONNECTED: '✅ Connected to DB',
  SERVER_RUNNING: '✅ Server running:',
}; 