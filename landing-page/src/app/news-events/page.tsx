import React from "react";
import type { Metadata } from "next";
import NewsEventsSection from "@/components/NewsEventsSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "News, Events & Noticeboard | PPM HSS Kottukkara",
  description:
    "Stay informed with official school news, calendar events, urgent announcements, and the digital noticeboard.",
};

export default function NewsEventsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="OFFICIAL NOTICES & NOTIFICATIONS"
        title="News, Events &"
        highlightWord="Noticeboard"
        description="Board exam schedules, official notices, academic circulars, and campus events."
        breadcrumbLabel="News & Events"
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Notice Updates", value: "Real-Time" },
          { label: "Annual Events", value: "35+ Highlights" },
          { label: "Board Notices", value: "DHSE & KBPE" },
        ]}
      />
      <NewsEventsSection />
    </div>
  );
}
