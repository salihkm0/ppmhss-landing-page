import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Enquiry } from "@/models/Enquiry";

export async function GET() {
  try {
    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(50);
      return NextResponse.json({ success: true, source: "mongodb", data: enquiries });
    }
  } catch (error) {
    console.warn("Failed fetching from MongoDB, falling back to local store:", error);
  }

  return NextResponse.json({ success: true, source: "fallback", data: fallbackStore.enquiries });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, parentName, phone, email, seekingGrade, stream, previousSchool, marksPercentage, notes } = body;

    if (!studentName || !parentName || !phone || !seekingGrade) {
      return NextResponse.json(
        { success: false, message: "Required fields missing (student name, parent name, phone, grade)" },
        { status: 400 }
      );
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      const created = await Enquiry.create({
        studentName,
        parentName,
        phone,
        email,
        seekingGrade,
        stream,
        previousSchool,
        marksPercentage,
        notes,
        status: "Received",
      });
      return NextResponse.json({ success: true, message: "Application enquiry submitted successfully to PPM HSS Admissions Cell.", data: created });
    } else {
      const fallbackItem = {
        id: "enq_" + Date.now(),
        studentName,
        parentName,
        phone,
        email,
        seekingGrade,
        stream,
        previousSchool,
        marksPercentage,
        notes,
        status: "Received",
        createdAt: new Date().toISOString(),
      };
      fallbackStore.enquiries.unshift(fallbackItem);
      return NextResponse.json({ success: true, message: "Application enquiry submitted successfully to PPM HSS Admissions Cell.", data: fallbackItem });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}

