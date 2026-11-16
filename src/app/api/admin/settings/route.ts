import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { SiteSettings } from "@/models/SiteSettings";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      let settings = await SiteSettings.findOne();
      if (!settings) {
        settings = await SiteSettings.create(fallbackStore.siteSettings);
      }
      return NextResponse.json({ success: true, data: settings });
    } catch {
      // fallback
    }
  }

  return NextResponse.json({ success: true, data: fallbackStore.siteSettings });
}

export async function PUT(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { schoolInfo, administration, bannerAnnouncement } = body;

    const { isConnected } = await connectToDatabase();
    if (isConnected) {
      try {
        let settings = await SiteSettings.findOne();
        if (!settings) {
          settings = new SiteSettings();
        }
        if (schoolInfo) settings.schoolInfo = schoolInfo;
        if (administration) settings.administration = administration;
        if (bannerAnnouncement) settings.bannerAnnouncement = bannerAnnouncement;
        await settings.save();
        return NextResponse.json({ success: true, message: "Settings updated successfully", data: settings });
      } catch (err: any) {
        console.warn("MongoDB settings update error:", err.message);
      }
    }

    // Update fallback store
    if (schoolInfo) fallbackStore.siteSettings.schoolInfo = { ...fallbackStore.siteSettings.schoolInfo, ...schoolInfo };
    if (administration) fallbackStore.siteSettings.administration = { ...fallbackStore.siteSettings.administration, ...administration };
    if (bannerAnnouncement) fallbackStore.siteSettings.bannerAnnouncement = { ...fallbackStore.siteSettings.bannerAnnouncement, ...bannerAnnouncement };

    return NextResponse.json({
      success: true,
      message: "Settings updated (in-memory)",
      data: fallbackStore.siteSettings,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
