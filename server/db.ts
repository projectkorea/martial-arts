import mongoose from "mongoose";
import config from "./config";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from './constants';

type DbConnectionHandler = () => void;
type DbErrorHandler = (error: mongoose.Error) => void;

const handleOpen: DbConnectionHandler = () => console.log(SUCCESS_MESSAGES.DB_CONNECTED);
const handleError: DbErrorHandler = (error) => 
  console.log(`${ERROR_MESSAGES.DB_CONNECTION} ${error.message}`);

mongoose.connect(config.mongoUri)
  .catch((error) => {
    console.error(`${ERROR_MESSAGES.INITIAL_CONNECTION} ${error.message}`);
    process.exit(1);
  });

const db = mongoose.connection;

db.once("open", handleOpen);
db.on("error", handleError);

export default db;
