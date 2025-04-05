import dotenv from "dotenv";
import path from "path";
import { ERROR_MESSAGES } from './constants';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

interface Config {
  mongoUri: string;
  port: number;
}

if (!process.env.MONGODB_URI_JUNHA) {
  console.error(ERROR_MESSAGES.MISSING_MONGO_URI);
  process.exit(1);
}

const config: Config = {
  mongoUri: process.env.MONGODB_URI_JUNHA,
  port: parseInt(process.env.PORT || '3000', 10),
};

export default config;
