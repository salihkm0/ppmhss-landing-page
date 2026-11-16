import mongoose, { Schema, Document } from "mongoose";

export interface IAlumni extends Document {
  fullName: string;
  batchYear: string;
  stream: string;
  higherEducation?: string;
  currentProfession: string;
  companyOrOrganization?: string;
  location: string;
  email: string;
  phone: string;
  testimonial?: string;
  isVerified: boolean;
  createdAt: Date;
}

const AlumniSchema = new Schema<IAlumni>(
  {
    fullName: { type: String, required: true },
    batchYear: { type: String, required: true },
    stream: { type: String, required: true },
    higherEducation: { type: String },
    currentProfession: { type: String, required: true },
    companyOrOrganization: { type: String },
    location: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    testimonial: { type: String },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Alumni =
  mongoose.models.Alumni || mongoose.model<IAlumni>("Alumni", AlumniSchema);

