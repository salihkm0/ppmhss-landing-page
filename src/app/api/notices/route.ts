import { NextResponse } from "next/server";
import { NOTICES_LIST } from "@/data/schoolData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const showArchived = searchParams.get("archived") === "true";

  const filtered = NOTICES_LIST.filter((n) => (showArchived ? n.archived : !n.archived));
  return NextResponse.json({ success: true, count: filtered.length, data: filtered });
}

