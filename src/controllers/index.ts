import MartialArtsResult from "../models/MartialArtsResult";

export const renderHomePage = (_, res) => {
  res.render('home');
};
export const renderQuestionPage = (_, res) => {
  res.render('question');
};

export const saveResultToDB = async (req, res, next) => {
  const { E, I, S, N, F, T, P, J, RESULT } = req.body;

  try {
    const newResult = await MartialArtsResult.create({
      prop: { E, I, S, N, F, T, P, J },
      result: RESULT,
    });
    next();
  } catch (error) {
    console.error(error);
    next(error);
  }
};
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

export const redirectBasedOnResult = async (req, res) => {
  try {
    const { RESULT: type } = req.body;
    if (type) {
      res.redirect('result/' + type);
    } else {
      res.status(404).redirect('/mbti');
    }
  } catch (error) {
    // res.status(500).send('Internal Server Error');
  }
};

export const validateMBTIType = (req, res, next) => {
  const { type } = req.params;
  const path = type.toLowerCase();
  if (mbtiTypes.hasOwnProperty(path)) {
    next();
  } else {
    res.status(404).redirect('/mbti');
  }
};

export const renderMBTIResult = async (req, res) => {
  try {
    const { type } = req.params;
    const sameNumber = await MartialArtsResult.countDocuments({
      result: type,
    }).exec();
    const totalNumber = await MartialArtsResult.countDocuments({}).exec();
    const pageName = `result${type}`;

    res.render(pageName, { totalNumber, sameNumber });
  } catch (error) {
    res.redirect('/');
    console.log(error);
  }
};
