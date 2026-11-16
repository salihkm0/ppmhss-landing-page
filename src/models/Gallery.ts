import mongoose, { Schema, Document } from "mongoose";

export interface IGallery extends Document {
  title: string;
  category: "campus" | "academic" | "sports" | "arts" | "labs" | "events";
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  year?: string;
  sortOrder?: number;
  createdAt: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["campus", "academic", "sports", "arts", "labs", "events"],
      required: true,
    },
    categoryLabel: { type: String, required: true },
    imageUrl: { type: String, required: true },
    caption: { type: String, default: "" },
    year: { type: String, default: "2024–25" },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Gallery =
  mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", GallerySchema);
