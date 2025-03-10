import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import config from "./config";
import "./db";
import "./models/MartialArtsResult";
import mbtiRouter from "./router";
const app = express();

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
app.use("/", mbtiRouter);

app.use((_, res) => {
  res.status(404).redirect("/");
});

const PORT = config.port;
app.listen(PORT, () => 
  console.log(`✅ Server running: http://localhost:${PORT}`)
);

export default app;
