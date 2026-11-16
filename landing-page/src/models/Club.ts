import mongoose, { Schema, Document } from "mongoose";

export interface IClub extends Document {
  name: string;
  category: string;
  coordinator: string;
  description: string;
  activities: string[];
  createdAt: Date;
}

const ClubSchema = new Schema<IClub>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    coordinator: { type: String, required: true },
    description: { type: String, required: true },
    activities: [{ type: String }],
  },
  { timestamps: true }
);

export const Club =
  mongoose.models.Club || mongoose.model<IClub>("Club", ClubSchema);

