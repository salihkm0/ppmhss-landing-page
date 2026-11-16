import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Resource } from "@/models/Resource";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const resources = await Resource.find().sort({ createdAt: -1 });
      if (resources && resources.length > 0) {
        return NextResponse.json({ success: true, count: resources.length, data: resources });
      }
    } catch {
      // fallback
    }
  }

  return NextResponse.json({
    success: true,
    count: fallbackStore.resources.length,
    data: fallbackStore.resources,
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, category, grade, subject, year, fileSize, downloadUrl, dateAdded } = body;

    if (!title || !category || !grade || !downloadUrl) {
      return NextResponse.json({ success: false, error: "Title, category, grade, and downloadUrl are required" }, { status: 400 });
    }

    const today = dateAdded || new Date().toISOString().split("T")[0];

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const item = await Resource.create({
          title,
          category,
          grade,
          subject: subject || "General",
          year: year || "2024–25",
          fileSize: fileSize || "1.2 MB",
          downloadUrl,
          dateAdded: today,
        });
        return NextResponse.json({ success: true, message: "Resource added", data: item });
      } catch (err: any) {
        console.warn("MongoDB create resource error:", err.message);
      }
    }

    const newItem = {
      id: `r-${Date.now()}`,
      title,
      category,
      grade,
      subject: subject || "General",
      year: year || "2024–25",
      fileSize: fileSize || "1.2 MB",
      downloadUrl,
      dateAdded: today,
    };
    fallbackStore.resources.unshift(newItem);

    return NextResponse.json({ success: true, message: "Resource added (in-memory)", data: newItem });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, _id, ...fields } = body;
    const targetId = _id || id;

    if (!targetId) {
      return NextResponse.json({ success: false, error: "Resource ID is required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Resource.findByIdAndUpdate(targetId, fields, { new: true });
        if (updated) {
          return NextResponse.json({ success: true, message: "Resource updated", data: updated });
        }
      } catch (err: any) {
        console.warn("MongoDB update resource error:", err.message);
      }
    }

    const idx = fallbackStore.resources.findIndex((r: any) => r.id === targetId || r._id === targetId);
    if (idx !== -1) {
      fallbackStore.resources[idx] = { ...fallbackStore.resources[idx], ...fields };
      return NextResponse.json({ success: true, message: "Resource updated", data: fallbackStore.resources[idx] });
    }

    return NextResponse.json({ success: false, error: "Resource not found" }, { status: 404 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ success: false, error: "Resource ID is required" }, { status: 400 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      await Resource.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Resource deleted" });
    } catch {
      // fallback
    }
  }

  fallbackStore.resources = fallbackStore.resources.filter((r: any) => r.id !== id && r._id !== id);
  return NextResponse.json({ success: true, message: "Resource deleted" });
}

