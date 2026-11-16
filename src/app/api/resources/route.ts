import { NextResponse } from "next/server";
import { RESOURCES_LIST } from "@/data/schoolData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const grade = searchParams.get("grade");

  let filtered = RESOURCES_LIST;

  if (category && category !== "All") {
    filtered = filtered.filter((r) => r.category.toLowerCase().includes(category.toLowerCase()));
  }

  if (grade && grade !== "All") {
    filtered = filtered.filter((r) => r.grade.toLowerCase().includes(grade.toLowerCase()));
  }

  return NextResponse.json({ success: true, count: filtered.length, data: filtered });
}

