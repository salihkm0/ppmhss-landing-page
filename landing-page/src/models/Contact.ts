import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  department: string;
  subject: string;
  message: string;
  status: "Unread" | "In Progress" | "Resolved";
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    department: { type: String, default: "General Administration" },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["Unread", "In Progress", "Resolved"],
      default: "Unread",
    },
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

