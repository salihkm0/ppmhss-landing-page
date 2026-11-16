import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Club } from "@/models/Club";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const items = await Club.find().sort({ createdAt: -1 });
      if (items && items.length > 0) return NextResponse.json({ success: true, count: items.length, data: items });
    } catch {}
  }

  return NextResponse.json({ success: true, count: fallbackStore.clubs.length, data: fallbackStore.clubs });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { name, category, coordinator, description, activities } = body;

    const acts = Array.isArray(activities)
      ? activities
      : typeof activities === "string"
      ? activities.split(",").map((a) => a.trim())
      : [];

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const item = await Club.create({ name, category, coordinator, description, activities: acts });
        return NextResponse.json({ success: true, message: "Club added", data: item });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const newItem = { id: `cl-${Date.now()}`, name, category, coordinator, description, activities: acts };
    fallbackStore.clubs.unshift(newItem);
    return NextResponse.json({ success: true, message: "Club added", data: newItem });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { id, _id, activities, ...fields } = body;
    const targetId = _id || id;

    const acts = activities
      ? Array.isArray(activities)
        ? activities
        : typeof activities === "string"
        ? activities.split(",").map((a) => a.trim())
        : []
      : undefined;

    const updateData = { ...fields, ...(acts ? { activities: acts } : {}) };

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Club.findByIdAndUpdate(targetId, updateData, { new: true });
        if (updated) return NextResponse.json({ success: true, message: "Club updated", data: updated });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const idx = fallbackStore.clubs.findIndex((c: any) => c.id === targetId || c._id === targetId);
    if (idx !== -1) {
      fallbackStore.clubs[idx] = { ...fallbackStore.clubs[idx], ...updateData };
      return NextResponse.json({ success: true, message: "Club updated", data: fallbackStore.clubs[idx] });
    }

    return NextResponse.json({ success: false, error: "Club not found" }, { status: 404 });
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
      await Club.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Club deleted" });
    } catch {}
  }

  fallbackStore.clubs = fallbackStore.clubs.filter((c: any) => c.id !== id && c._id !== id);
  return NextResponse.json({ success: true, message: "Club deleted" });
}
