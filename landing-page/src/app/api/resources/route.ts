import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Resource } from "@/models/Resource";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const grade = searchParams.get("grade");

  const { isConnected } = await connectToDatabase();
  let list = fallbackStore.resources;

  if (isConnected) {
    try {
      const items = await Resource.find().sort({ createdAt: -1 });
      if (items && items.length > 0) {
        list = items;
      }
    } catch {
      // fallback
    }
  }

  let filtered = list;
  if (category && category !== "All") {
    filtered = filtered.filter((r: any) =>
      r.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (grade && grade !== "All") {
    filtered = filtered.filter((r: any) =>
      r.grade.toLowerCase().includes(grade.toLowerCase())
    );
  }

  return NextResponse.json({ success: true, count: filtered.length, data: filtered });
}
