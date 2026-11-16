import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { Notice } from "@/models/Notice";
import { Teacher } from "@/models/Teacher";
import { Gallery } from "@/models/Gallery";
import { Resource } from "@/models/Resource";
import { Scholarship } from "@/models/Scholarship";
import { Club } from "@/models/Club";
import { Achievement } from "@/models/Achievement";
import { Enquiry } from "@/models/Enquiry";
import { Contact } from "@/models/Contact";
import { Alumni } from "@/models/Alumni";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { isConnected } = await connectToDatabase();

  if (isConnected) {
    try {
      const [
        notices,
        teachers,
        gallery,
        resources,
        scholarships,
        clubs,
        achievements,
        enquiries,
        contacts,
        alumni,
      ] = await Promise.all([
        Notice.countDocuments(),
        Teacher.countDocuments(),
        Gallery.countDocuments(),
        Resource.countDocuments(),
        Scholarship.countDocuments(),
        Club.countDocuments(),
        Achievement.countDocuments(),
        Enquiry.countDocuments(),
        Contact.countDocuments(),
        Alumni.countDocuments(),
      ]);

      return NextResponse.json({
        success: true,
        stats: {
          notices: notices || fallbackStore.notices.length,
          teachers: teachers || fallbackStore.teachers.length,
          gallery: gallery || fallbackStore.gallery.length,
          resources: resources || fallbackStore.resources.length,
          scholarships: scholarships || fallbackStore.scholarships.length,
          clubs: clubs || fallbackStore.clubs.length,
          achievements: achievements || fallbackStore.achievements.length,
          enquiries: enquiries || fallbackStore.enquiries.length,
          contacts: contacts || fallbackStore.contacts.length,
          alumni: alumni || fallbackStore.alumni.length,
        },
        database: "MongoDB Connected",
      });
    } catch {
      // Fallback
    }
  }

  return NextResponse.json({
    success: true,
    stats: {
      notices: fallbackStore.notices.length,
      teachers: fallbackStore.teachers.length,
      gallery: fallbackStore.gallery.length,
      resources: fallbackStore.resources.length,
      scholarships: fallbackStore.scholarships.length,
      clubs: fallbackStore.clubs.length,
      achievements: fallbackStore.achievements.length,
      enquiries: fallbackStore.enquiries.length,
      contacts: fallbackStore.contacts.length,
      alumni: fallbackStore.alumni.length,
    },
    database: "Mock In-Memory Store",
  });
}
