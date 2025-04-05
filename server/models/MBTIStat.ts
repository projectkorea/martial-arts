import mongoose, { Schema } from "mongoose";

const statSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  }
}, { versionKey: false });

const MBTIStat = mongoose.model("mbti_stat", statSchema);
export default MBTIStat;