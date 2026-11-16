import React from "react";
import type { Metadata } from "next";
import NewsEventsSection from "@/components/NewsEventsSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "News, Events & Noticeboard | PPM HSS Kottukkara",
  description: "Stay informed with official school news, calendar events, urgent announcements, and the digital noticeboard.",
};

export default function NewsEventsPage() {
  return (
    <div>
      <Breadcrumb currentPage="News, Events & Noticeboard" />
      <NewsEventsSection />
    </div>
  );
}
