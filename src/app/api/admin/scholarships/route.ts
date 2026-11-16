import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Scholarship } from "@/models/Scholarship";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const items = await Scholarship.find().sort({ createdAt: -1 });
      if (items && items.length > 0) return NextResponse.json({ success: true, count: items.length, data: items });
    } catch {}
  }

  return NextResponse.json({ success: true, count: fallbackStore.scholarships.length, data: fallbackStore.scholarships });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const { name, target, provider, amount, eligibility, deadline, applyUrl } = body;

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const item = await Scholarship.create({ name, target, provider, amount, eligibility, deadline, applyUrl });
        return NextResponse.json({ success: true, message: "Scholarship added", data: item });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const newItem = { id: `sc-${Date.now()}`, name, target, provider, amount, eligibility, deadline, applyUrl };
    fallbackStore.scholarships.unshift(newItem);
    return NextResponse.json({ success: true, message: "Scholarship added", data: newItem });
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
        const updated = await Scholarship.findByIdAndUpdate(targetId, fields, { new: true });
        if (updated) return NextResponse.json({ success: true, message: "Scholarship updated", data: updated });
      } catch (err: any) {
        console.warn(err.message);
      }
    }

    const idx = fallbackStore.scholarships.findIndex((s: any) => s.id === targetId || s._id === targetId);
    if (idx !== -1) {
      fallbackStore.scholarships[idx] = { ...fallbackStore.scholarships[idx], ...fields };
      return NextResponse.json({ success: true, message: "Scholarship updated", data: fallbackStore.scholarships[idx] });
    }

    return NextResponse.json({ success: false, error: "Scholarship not found" }, { status: 404 });
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
      await Scholarship.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Scholarship deleted" });
    } catch {}
  }

  fallbackStore.scholarships = fallbackStore.scholarships.filter((s: any) => s.id !== id && s._id !== id);
  return NextResponse.json({ success: true, message: "Scholarship deleted" });
}

