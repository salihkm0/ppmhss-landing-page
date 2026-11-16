import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Achievement } from "@/models/Achievement";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const items = await Achievement.find().sort({ createdAt: -1 });
      if (items && items.length > 0) return NextResponse.json({ success: true, count: items.length, data: items });
    } catch {}
  }

  return NextResponse.json({ success: true, count: fallbackStore.achievements.length, data: fallbackStore.achievements });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { title, category, year, description, badge } = body;

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const item = await Achievement.create({ title, category, year, description, badge });
        return NextResponse.json({ success: true, message: "Achievement added", data: item });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const newItem = { id: `ac-${Date.now()}`, title, category, year, description, badge: badge || "Honour" };
    fallbackStore.achievements.unshift(newItem);
    return NextResponse.json({ success: true, message: "Achievement added", data: newItem });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { id, _id, ...fields } = body;
    const targetId = _id || id;

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Achievement.findByIdAndUpdate(targetId, fields, { new: true });
        if (updated) return NextResponse.json({ success: true, message: "Achievement updated", data: updated });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const idx = fallbackStore.achievements.findIndex((a: any) => a.id === targetId || a._id === targetId);
    if (idx !== -1) {
      fallbackStore.achievements[idx] = { ...fallbackStore.achievements[idx], ...fields };
      return NextResponse.json({ success: true, message: "Achievement updated", data: fallbackStore.achievements[idx] });
    }

    return NextResponse.json({ success: false, error: "Achievement not found" }, { status: 404 });
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
      await Achievement.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Achievement deleted" });
    } catch {}
  }

  fallbackStore.achievements = fallbackStore.achievements.filter((a: any) => a.id !== id && a._id !== id);
  return NextResponse.json({ success: true, message: "Achievement deleted" });
}
