import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Teacher } from "@/models/Teacher";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const teachers = await Teacher.find().sort({ sortOrder: 1, name: 1 });
      if (teachers && teachers.length > 0) {
        return NextResponse.json({ success: true, count: teachers.length, data: teachers });
      }
    } catch {
      // fallback
    }
  }

  return NextResponse.json({
    success: true,
    count: fallbackStore.teachers.length,
    data: fallbackStore.teachers,
  });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, designation, department, qualification, experience, photoUrl, wing, email, specialization, sortOrder } = body;

    if (!name || !designation || !wing) {
      return NextResponse.json({ success: false, error: "Name, designation, and wing are required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const teacher = await Teacher.create({
          name,
          designation,
          department: department || "General",
          qualification: qualification || "Degree",
          experience: experience || "5+ Years",
          photoUrl: photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          wing,
          email: email || "ppmhss@gmail.com",
          specialization,
          sortOrder: sortOrder || 0,
        });
        return NextResponse.json({ success: true, message: "Faculty member added", data: teacher });
      } catch (err: any) {
        console.warn("MongoDB create teacher error:", err.message);
      }
    }

    const newTeacher = {
      id: `t-${Date.now()}`,
      name,
      designation,
      department: department || "General",
      qualification: qualification || "Degree",
      experience: experience || "5+ Years",
      photoUrl: photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      wing,
      email: email || "ppmhss@gmail.com",
      specialization,
      sortOrder: sortOrder || 0,
    };
    fallbackStore.teachers.unshift(newTeacher);

    return NextResponse.json({ success: true, message: "Faculty member added (in-memory)", data: newTeacher });
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
      return NextResponse.json({ success: false, error: "Teacher ID is required" }, { status: 400 });
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        const updated = await Teacher.findByIdAndUpdate(targetId, fields, { new: true });
        if (updated) {
          return NextResponse.json({ success: true, message: "Teacher updated", data: updated });
        }
      } catch (err: any) {
        console.warn("MongoDB update teacher error:", err.message);
      }
    }

    const idx = fallbackStore.teachers.findIndex((t: any) => t.id === targetId || t._id === targetId);
    if (idx !== -1) {
      fallbackStore.teachers[idx] = { ...fallbackStore.teachers[idx], ...fields };
      return NextResponse.json({ success: true, message: "Teacher updated", data: fallbackStore.teachers[idx] });
    }

    return NextResponse.json({ success: false, error: "Teacher not found" }, { status: 404 });
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
    return NextResponse.json({ success: false, error: "Teacher ID is required" }, { status: 400 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      await Teacher.findByIdAndDelete(id);
      return NextResponse.json({ success: true, message: "Teacher deleted" });
    } catch {
      // fallback
    }
  }

  fallbackStore.teachers = fallbackStore.teachers.filter((t: any) => t.id !== id && t._id !== id);
  return NextResponse.json({ success: true, message: "Teacher deleted" });
}
