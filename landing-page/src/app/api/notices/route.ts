import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Notice } from "@/models/Notice";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const showArchived = searchParams.get("archived") === "true";

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const query = showArchived ? { archived: true } : { archived: false };
      const notices = await Notice.find(query).sort({ createdAt: -1 });
      if (notices && notices.length > 0) {
        return NextResponse.json({ success: true, count: notices.length, data: notices });
      }
    } catch {
      // fallback
    }
  }

  const filtered = fallbackStore.notices.filter((n: any) =>
    showArchived ? n.archived : !n.archived
  );
  return NextResponse.json({ success: true, count: filtered.length, data: filtered });
}
