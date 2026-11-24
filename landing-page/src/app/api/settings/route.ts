import { NextResponse } from "next/server";
import { connectToDatabase, fallbackStore } from "@/lib/mongodb";
import { SiteSettings } from "@/models/SiteSettings";

export async function GET() {
  const { isConnected } = await connectToDatabase();
  if (isConnected) {
    try {
      const settings = await SiteSettings.findOne();
      if (settings) {
        return NextResponse.json({ success: true, data: settings });
      }
    } catch {}
  }
  return NextResponse.json({ success: true, data: fallbackStore.siteSettings });
}

