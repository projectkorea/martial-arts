import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import resultRouter from "./router/resultRouter";

const app = express();

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use("/static", express.static(path.join(__dirname, "static")));

app.use(routes.home, globalRouter);
app.use(routes.result, resultRouter);
app.use(function (req, res) {
  res.status(404).redirect("/");
});

export default app;
