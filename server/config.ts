import dotenv from "dotenv";
import path from "path";
import { ERROR_MESSAGES } from './constants';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface Config {
  mongoUrl: string;
  port: number;
}

if (!process.env.MONGO_URL_MBTI) {
  console.error(ERROR_MESSAGES.MISSING_MONGO_URL);
  process.exit(1);
}

const config: Config = {
  mongoUrl: process.env.MONGO_URL_MBTI,
  port: parseInt(process.env.PORT || '4000', 10),
};

export default config;
