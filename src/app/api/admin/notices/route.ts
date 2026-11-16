import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Notice } from "@/models/Notice";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const notices = await Notice.find().sort({ createdAt: -1 });
      if (notices && notices.length > 0) {
        return NextResponse.json({ success: true, count: notices.length, data: notices });
      }
    } catch {
      // fallback
    }
  }

  return NextResponse.json({
    success: true,
    count: fallbackStore.notices.length,
    data: fallbackStore.notices,
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, date, category, summary, content, isUrgent, author, fileUrl } = body;

    if (!title || !date) {
      return NextResponse.json({ success: false, error: "Title and date are required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const notice = await Notice.create({
          title,
          date,
          category: category || "Notices",
          summary: summary || "",
          content: content || "",
          isUrgent: Boolean(isUrgent),
          author: author || "Office of the Principal",
          fileUrl,
          archived: false,
        });
        return NextResponse.json({ success: true, message: "Notice published", data: notice });
      } catch (err: any) {
        console.warn("MongoDB create notice error:", err.message);
      }
    }

    const newNotice = {
      id: `n-${Date.now()}`,
      title,
      date,
      category: category || "Notices",
      summary: summary || "",
      content: content || "",
      isUrgent: Boolean(isUrgent),
      author: author || "Office of the Principal",
      fileUrl,
      archived: false,
    };
    fallbackStore.notices.unshift(newNotice);

    return NextResponse.json({ success: true, message: "Notice published (in-memory)", data: newNotice });
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
    const { id, _id, title, date, category, summary, content, isUrgent, author, fileUrl, archived } = body;
    const targetId = _id || id;

    if (!targetId) {
      return NextResponse.json({ success: false, error: "Notice ID is required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Notice.findByIdAndUpdate(
          targetId,
          { title, date, category, summary, content, isUrgent, author, fileUrl, archived },
          { new: true }
        );
        if (updated) {
          return NextResponse.json({ success: true, message: "Notice updated", data: updated });
        }
      } catch (err: any) {
        console.warn("MongoDB update notice error:", err.message);
      }
    }

    // Fallback store
    const idx = fallbackStore.notices.findIndex((n: any) => n.id === targetId || n._id === targetId);
    if (idx !== -1) {
      fallbackStore.notices[idx] = {
        ...fallbackStore.notices[idx],
        title: title ?? fallbackStore.notices[idx].title,
        date: date ?? fallbackStore.notices[idx].date,
        category: category ?? fallbackStore.notices[idx].category,
        summary: summary ?? fallbackStore.notices[idx].summary,
        content: content ?? fallbackStore.notices[idx].content,
        isUrgent: isUrgent !== undefined ? isUrgent : fallbackStore.notices[idx].isUrgent,
        author: author ?? fallbackStore.notices[idx].author,
        fileUrl: fileUrl ?? fallbackStore.notices[idx].fileUrl,
        archived: archived !== undefined ? archived : fallbackStore.notices[idx].archived,
      };
      return NextResponse.json({ success: true, message: "Notice updated", data: fallbackStore.notices[idx] });
    }

    return NextResponse.json({ success: false, error: "Notice not found" }, { status: 404 });
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
    return NextResponse.json({ success: false, error: "Notice ID is required" }, { status: 400 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      await Notice.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Notice deleted" });
    } catch {
      // fallback
    }
  }

  fallbackStore.notices = fallbackStore.notices.filter((n: any) => n.id !== id && n._id !== id);
  return NextResponse.json({ success: true, message: "Notice deleted" });
}
