import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Teacher } from "@/models/Teacher";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const wing = searchParams.get("wing");
  const dept = searchParams.get("department");

  const { isConnected } = await connectToDatabase();
  let list = fallbackStore.teachers;

  if (isConnected) {
    try {
      const items = await Teacher.find().sort({ sortOrder: 1, name: 1 });
      if (items && items.length > 0) {
        list = items;
      }
    } catch {
      // fallback
    }
  }

  let filtered = list;
  if (wing && wing !== "All") {
    filtered = filtered.filter((t: any) => t.wing.toLowerCase() === wing.toLowerCase());
  }

  if (dept && dept !== "All") {
    filtered = filtered.filter((t: any) =>
      t.department.toLowerCase().includes(dept.toLowerCase())
    );
  }

  return NextResponse.json({ success: true, count: filtered.length, data: filtered });
}

