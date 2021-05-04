import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  user: { type: Number, default: 1 },
  score: { type: Number },
  prop: { type: Object },
  result: { type: String },
});

const model = mongoose.model("Result", resultSchema);
export default model;
