
import mongoose, { Schema, Document } from "mongoose";

export interface IFormData extends Document {
  username: string;
  anonym: boolean;
  tid: {
    months: string;
    years: string;
  };
  kundeomtale: string;
  rating: number;
}

const FormDataSchema: Schema = new Schema({
  username: { type: String, required: true },
  anonym: { type: Boolean, required: true },
  tid: {
    months: { type: String, required: true },
    years: { type: String, required: true },
  },
  kundeomtale: { type: String, required: true },
  rating: { type: Number, required: true },
});

export const FormData =
  mongoose.models.FormData ||
  mongoose.model<IFormData>("FormData", FormDataSchema);
