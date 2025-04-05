  import mongoose, { Schema } from "mongoose";
  import { IMartialArtsResult } from "../types";

  const resultSchema = new Schema<IMartialArtsResult>({
    score: { 
      type: Object,
      required: true 
    },
    mbtiType: { 
      type: String,
      required: true 
    },
  }, { versionKey: false });

  const MBTIResult = mongoose.model<IMartialArtsResult>("mbti_result", resultSchema);
  export default MBTIResult;
