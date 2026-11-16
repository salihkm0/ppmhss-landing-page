import mongoose, { Schema, Document } from "mongoose";

export interface IScholarship extends Document {
  name: string;
  target: string;
  provider: string;
  amount: string;
  eligibility: string;
  deadline: string;
  applyUrl?: string;
  createdAt: Date;
}

const ScholarshipSchema = new Schema<IScholarship>(
  {
    name: { type: String, required: true },
    target: { type: String, required: true },
    provider: { type: String, required: true },
    amount: { type: String, required: true },
    eligibility: { type: String, required: true },
    deadline: { type: String, required: true },
    applyUrl: { type: String },
  },
  { timestamps: true }
);

export const Scholarship =
  mongoose.models.Scholarship ||
  mongoose.model<IScholarship>("Scholarship", ScholarshipSchema);

