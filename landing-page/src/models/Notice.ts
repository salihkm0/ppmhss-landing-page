import mongoose, { Schema, Document } from "mongoose";

export interface INotice extends Document {
  title: string;
  date: string;
  category: "Academic" | "Admissions" | "Events" | "Sports" | "Notices";
  summary: string;
  content: string;
  isUrgent: boolean;
  author: string;
  fileUrl?: string;
  archived: boolean;
  createdAt: Date;
}

const NoticeSchema = new Schema<INotice>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    category: {
      type: String,
      enum: ["Academic", "Admissions", "Events", "Sports", "Notices"],
      default: "Notices",
    },
    summary: { type: String, default: "" },
    content: { type: String, default: "" },
    isUrgent: { type: Boolean, default: false },
    author: { type: String, default: "Office of the Principal" },
    fileUrl: { type: String },
    archived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Notice =
  mongoose.models.Notice || mongoose.model<INotice>("Notice", NoticeSchema);

