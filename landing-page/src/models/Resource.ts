import mongoose, { Schema, Document } from "mongoose";

export interface IResource extends Document {
  title: string;
  category:
    | "Question Paper"
    | "Question Bank"
    | "Holiday Worksheet"
    | "Circular & GO"
    | "Time Table"
    | "Form";
  grade:
    | "Class 8"
    | "Class 9"
    | "SSLC (Class 10)"
    | "Plus One (+1)"
    | "Plus Two (+2)"
    | "General";
  subject?: string;
  year?: string;
  fileSize: string;
  downloadUrl: string;
  dateAdded: string;
  createdAt: Date;
}

const ResourceSchema = new Schema<IResource>(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "Question Paper",
        "Question Bank",
        "Holiday Worksheet",
        "Circular & GO",
        "Time Table",
        "Form",
      ],
      required: true,
    },
    grade: {
      type: String,
      enum: [
        "Class 8",
        "Class 9",
        "SSLC (Class 10)",
        "Plus One (+1)",
        "Plus Two (+2)",
        "General",
      ],
      required: true,
    },
    subject: { type: String },
    year: { type: String, default: "2024–25" },
    fileSize: { type: String, default: "1.2 MB" },
    downloadUrl: { type: String, required: true },
    dateAdded: { type: String, required: true },
  },
  { timestamps: true }
);

export const Resource =
  mongoose.models.Resource || mongoose.model<IResource>("Resource", ResourceSchema);

