import mongoose, { Schema, Document } from "mongoose";

export interface IEnquiry extends Document {
  studentName: string;
  parentName: string;
  phone: string;
  email?: string;
  seekingGrade: string;
  stream?: string;
  previousSchool?: string;
  marksPercentage?: string;
  notes?: string;
  status: "Received" | "Under Review" | "Shortlisted" | "Approved";
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>(
  {
    studentName: { type: String, required: true },
    parentName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    seekingGrade: { type: String, required: true },
    stream: { type: String },
    previousSchool: { type: String },
    marksPercentage: { type: String },
    notes: { type: String },
    status: {
      type: String,
      enum: ["Received", "Under Review", "Shortlisted", "Approved"],
      default: "Received",
    },
  },
  { timestamps: true }
);

export const Enquiry =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

