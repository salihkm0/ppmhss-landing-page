import mongoose, { Schema, Document } from "mongoose";

export interface ITeacher extends Document {
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  photoUrl: string;
  wing: "High School" | "Higher Secondary" | "Administration";
  email?: string;
  specialization?: string;
  sortOrder?: number;
  createdAt: Date;
}

const TeacherSchema = new Schema<ITeacher>(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    department: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    photoUrl: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
    wing: {
      type: String,
      enum: ["High School", "Higher Secondary", "Administration"],
      required: true,
    },
    email: { type: String, default: "ppmhss@gmail.com" },
    specialization: { type: String },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Teacher =
  mongoose.models.Teacher || mongoose.model<ITeacher>("Teacher", TeacherSchema);

