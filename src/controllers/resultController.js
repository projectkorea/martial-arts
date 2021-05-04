import { totalNumber, percentage, finalResult } from "./loadingController";

export const result = (req, res) => {
  res.render("result", { totalNumber, percentage, finalResult });
};
