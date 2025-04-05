import express, { Express } from "express";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config";
import "./db";
import "./models/MBTIResult";
import router from "./router";
import { SUCCESS_MESSAGES } from "./constants";
import path from "path";

const app: Express = express();

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../build/client')));

app.use("/api/mbti", router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/client/index.html'));
});

const PORT = config.port;
app.listen(PORT, () => 
  console.log(`${SUCCESS_MESSAGES.SERVER_RUNNING} http://localhost:${PORT}/mbti`)
);

export default app;
