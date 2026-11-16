import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Alumni } from "@/models/Alumni";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const items = await Alumni.find().sort({ createdAt: -1 });
      if (items && items.length > 0) return NextResponse.json({ success: true, count: items.length, data: items });
    } catch {}
  }

  return NextResponse.json({ success: true, count: fallbackStore.alumni.length, data: fallbackStore.alumni });
}

export async function PATCH(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { id, _id, isVerified } = body;
    const targetId = _id || id;

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Alumni.findByIdAndUpdate(targetId, { isVerified }, { new: true });
        if (updated) return NextResponse.json({ success: true, message: "Status updated", data: updated });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const idx = fallbackStore.alumni.findIndex((a: any) => a.id === targetId || a._id === targetId);
    if (idx !== -1) {
      fallbackStore.alumni[idx].isVerified = isVerified;
      return NextResponse.json({ success: true, message: "Status updated", data: fallbackStore.alumni[idx] });
    }

    return NextResponse.json({ success: false, error: "Alumni record not found" }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ success: false, error: "ID required" }, { status: 400 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      await Alumni.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Alumni deleted" });
    } catch {}
  }

  fallbackStore.alumni = fallbackStore.alumni.filter((a: any) => a.id !== id && a._id !== id);
  return NextResponse.json({ success: true, message: "Alumni deleted" });
}

