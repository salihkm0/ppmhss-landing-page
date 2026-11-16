import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Gallery } from "@/models/Gallery";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const gallery = await Gallery.find().sort({ sortOrder: 1, createdAt: -1 });
      if (gallery && gallery.length > 0) {
        return NextResponse.json({ success: true, count: gallery.length, data: gallery });
      }
    } catch {
      // fallback
    }
  }

  return NextResponse.json({
    success: true,
    count: fallbackStore.gallery.length,
    data: fallbackStore.gallery,
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, category, categoryLabel, imageUrl, caption, year, sortOrder } = body;

    if (!title || !category || !imageUrl) {
      return NextResponse.json({ success: false, error: "Title, category, and imageUrl are required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const item = await Gallery.create({
          title,
          category,
          categoryLabel: categoryLabel || category,
          imageUrl,
          caption: caption || "",
          year: year || "2024–25",
          sortOrder: sortOrder || 0,
        });
        return NextResponse.json({ success: true, message: "Gallery photo added", data: item });
      } catch (err: any) {
        console.warn("MongoDB create gallery error:", err.message);
      }
    }

    const newItem = {
      id: `g-${Date.now()}`,
      title,
      category,
      categoryLabel: categoryLabel || category,
      imageUrl,
      caption: caption || "",
      year: year || "2024–25",
      sortOrder: sortOrder || 0,
    };
    fallbackStore.gallery.unshift(newItem);

    return NextResponse.json({ success: true, message: "Gallery photo added (in-memory)", data: newItem });
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
      return NextResponse.json({ success: false, error: "Photo ID is required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Gallery.findByIdAndUpdate(targetId, fields, { new: true });
        if (updated) {
          return NextResponse.json({ success: true, message: "Gallery item updated", data: updated });
        }
      } catch (err: any) {
        console.warn("MongoDB update gallery error:", err.message);
      }
    }

    const idx = fallbackStore.gallery.findIndex((g: any) => g.id === targetId || g._id === targetId);
    if (idx !== -1) {
      fallbackStore.gallery[idx] = { ...fallbackStore.gallery[idx], ...fields };
      return NextResponse.json({ success: true, message: "Gallery item updated", data: fallbackStore.gallery[idx] });
    }

    return NextResponse.json({ success: false, error: "Gallery item not found" }, { status: 404 });
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
    return NextResponse.json({ success: false, error: "Photo ID is required" }, { status: 400 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      await Gallery.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Gallery photo deleted" });
    } catch {
      // fallback
    }
  }

  fallbackStore.gallery = fallbackStore.gallery.filter((g: any) => g.id !== id && g._id !== id);
  return NextResponse.json({ success: true, message: "Gallery photo deleted" });
}

