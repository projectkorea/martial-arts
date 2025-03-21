import mongoose, { Schema } from "mongoose";
import { IMartialArtsResult, PersonalityProps } from "../types";

type ResultSchemaDefinition = {
  prop: {
    type: mongoose.SchemaDefinitionType<PersonalityProps>;
    required: boolean;
  };
  result: {
    type: mongoose.SchemaDefinitionType<string>;
    required: boolean;
  };
};

const resultSchema = new Schema<IMartialArtsResult, ResultSchemaDefinition>({
  prop: { 
    type: Object,
    required: true 
  },
  result: { 
    type: String,
    required: true 
  },
});

const MartialArtsResult = mongoose.model<IMartialArtsResult>("MartialArtsResult", resultSchema);
export default MartialArtsResult;
