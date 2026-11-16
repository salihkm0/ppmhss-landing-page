import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const items = await Contact.find().sort({ createdAt: -1 });
      if (items && items.length > 0) return NextResponse.json({ success: true, count: items.length, data: items });
    } catch {}
  }

  return NextResponse.json({ success: true, count: fallbackStore.contacts.length, data: fallbackStore.contacts });
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
        const updated = await Contact.findByIdAndUpdate(targetId, { status }, { new: true });
        if (updated) return NextResponse.json({ success: true, message: "Status updated", data: updated });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const idx = fallbackStore.contacts.findIndex((c: any) => c.id === targetId || c._id === targetId);
    if (idx !== -1) {
      fallbackStore.contacts[idx].status = status;
      return NextResponse.json({ success: true, message: "Status updated", data: fallbackStore.contacts[idx] });
    }

    return NextResponse.json({ success: false, error: "Contact not found" }, { status: 404 });
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
      await Contact.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Message deleted" });
    } catch {}
  }

  fallbackStore.contacts = fallbackStore.contacts.filter((c: any) => c.id !== id && c._id !== id);
  return NextResponse.json({ success: true, message: "Message deleted" });
}

