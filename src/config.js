import dotenv from "dotenv";

dotenv.config();

const config = {
  mongoUrl: process.env.MONGO_URL,
  port: process.env.PORT || 3000,
};

export default config; 