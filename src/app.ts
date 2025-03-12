import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import config from "./config";
import "./db";
import "./models/MartialArtsResult";
import router from "./router";
import { SUCCESS_MESSAGES } from "./constants";

const app: Express = express();

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "pug");

app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/", router);

app.use((_: Request, res: Response) => {
  res.status(404).redirect("/");
});

const PORT = config.port;
app.listen(PORT, () => 
  console.log(`${SUCCESS_MESSAGES.SERVER_RUNNING} http://localhost:${PORT}`)
);

export default app;
