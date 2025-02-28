import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";
import "./db";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import resultRouter from "./router/resultRouter";
import "./models/MartialArtsResult";

dotenv.config();

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => 
  console.log(`✅ Server running: http://localhost:${PORT}`)
);

export default app;
