import mongoose, { Schema, Document } from "mongoose";

export interface IAchievement extends Document {
  title: string;
  category: "Academic" | "Sports" | "Arts & Kalolsavam" | "Institutional";
  year: string;
  description: string;
  badge: string;
  createdAt: Date;
}

const AchievementSchema = new Schema<IAchievement>(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Academic", "Sports", "Arts & Kalolsavam", "Institutional"],
      required: true,
    },
    year: { type: String, required: true },
    description: { type: String, required: true },
    badge: { type: String, default: "Honour" },
  },
  { timestamps: true }
);

export const Achievement =
  mongoose.models.Achievement ||
  mongoose.model<IAchievement>("Achievement", AchievementSchema);

