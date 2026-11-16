import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Enquiry } from "@/models/Enquiry";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const items = await Enquiry.find().sort({ createdAt: -1 });
      if (items && items.length > 0) return NextResponse.json({ success: true, count: items.length, data: items });
    } catch {}
  }

  return NextResponse.json({ success: true, count: fallbackStore.enquiries.length, data: fallbackStore.enquiries });
}

export async function PATCH(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { id, _id, status } = body;
    const targetId = _id || id;

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Enquiry.findByIdAndUpdate(targetId, { status }, { new: true });
        if (updated) return NextResponse.json({ success: true, message: "Status updated", data: updated });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const idx = fallbackStore.enquiries.findIndex((e: any) => e.id === targetId || e._id === targetId);
    if (idx !== -1) {
      fallbackStore.enquiries[idx].status = status;
      return NextResponse.json({ success: true, message: "Status updated", data: fallbackStore.enquiries[idx] });
    }

    return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
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
      await Enquiry.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Enquiry deleted" });
    } catch {}
  }

  fallbackStore.enquiries = fallbackStore.enquiries.filter((e: any) => e.id !== id && e._id !== id);
  return NextResponse.json({ success: true, message: "Enquiry deleted" });
}

