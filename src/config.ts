import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, '.env') });

const config = {
  mongoUrl: process.env.MONGO_URL_MBTI,
  port: process.env.PORT || 3000,
};

export default config;
