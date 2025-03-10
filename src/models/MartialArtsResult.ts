import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  prop: { type: Object },
  result: { type: String },
});

const model = mongoose.model("MartialArtsResult", resultSchema);
export default model;
