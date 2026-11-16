import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Alumni } from "@/models/Alumni";
import { ALUMNI_TESTIMONIALS } from "@/data/schoolData";

export async function GET() {
  try {
    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      const records = await Alumni.find().sort({ createdAt: -1 });
      return NextResponse.json({ success: true, source: "mongodb", data: records });
    }
  } catch (error) {
    console.warn("MongoDB read failed, using fallback:", error);
  }

  return NextResponse.json({
    success: true,
    source: "fallback",
    testimonials: ALUMNI_TESTIMONIALS,
    registered: fallbackStore.alumni,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      batchYear,
      stream,
      higherEducation,
      currentProfession,
      companyOrOrganization,
      location,
      email,
      phone,
      testimonial,
    } = body;

    if (!fullName || !batchYear || !stream || !currentProfession || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Required fields missing (full name, batch year, stream, profession, email, phone)" },
        { status: 400 }
      );
    }

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      const registered = await Alumni.create({
        fullName,
        batchYear,
        stream,
        higherEducation,
        currentProfession,
        companyOrOrganization,
        location: location || "Kerala, India",
        email,
        phone,
        testimonial,
        isVerified: false,
      });
      return NextResponse.json({
        success: true,
        message: "Welcome to the PPM HSS Global Alumni Network! Your registration is recorded.",
        data: registered,
      });
    } else {
      const fallbackItem = {
        id: "alm_" + Date.now(),
        fullName,
        batchYear,
        stream,
        higherEducation,
        currentProfession,
        companyOrOrganization,
        location: location || "Kerala, India",
        email,
        phone,
        testimonial,
        createdAt: new Date().toISOString(),
      };
      fallbackStore.alumni.unshift(fallbackItem);
      return NextResponse.json({
        success: true,
        message: "Welcome to the PPM HSS Global Alumni Network! Your registration is recorded.",
        data: fallbackItem,
      });
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}

