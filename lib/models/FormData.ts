// models/FormData.ts
import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for the form data
export interface IFormData extends Document {
  username: string;
  anonym: boolean;
  tid: {
    months: string;
    years: string;
  };
  kundeomtale: string;
}

// Schema definition
const FormDataSchema: Schema = new Schema({
  username: { type: String, required: true },
  anonym: { type: Boolean, required: true },
  tid: {
    months: { type: String, required: true },
    years: { type: String, required: true },
  },
  kundeomtale: { type: String, required: true },
});

// Export the model
export const FormData: Model<IFormData> = mongoose.models.FormData || mongoose.model<IFormData>("FormData", FormDataSchema);
