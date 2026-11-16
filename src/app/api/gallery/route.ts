import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Gallery } from "@/models/Gallery";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const { isConnected } = await connectToDatabase();
  let list = fallbackStore.gallery;

  if (isConnected) {
    try {
      const items = await Gallery.find().sort({ sortOrder: 1, createdAt: -1 });
      if (items && items.length > 0) {
        list = items;
      }
    } catch {
      // fallback
    }
  }

  let filtered = list;
  if (category && category !== "All") {
    filtered = filtered.filter(
      (g: any) =>
        g.category.toLowerCase() === category.toLowerCase() ||
        g.categoryLabel.toLowerCase() === category.toLowerCase()
    );
  }

  return NextResponse.json({ success: true, count: filtered.length, data: filtered });
}
