import React from "react";
import type { Metadata } from "next";
import CampusLifeSection from "@/components/CampusLifeSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Campus Life & Facilities | PPM HSS Kottukkara",
  description:
    "Discover facilities, student clubs, performing arts, athletics, achievements, and the media gallery at PPM HSS.",
};

export default function CampusLifePage() {
  return (
    <div>
      <PageBanner
        eyebrow="STUDENT LIFE & INFRASTRUCTURE"
        title="Campus Life &"
        highlightWord="Activities"
        description="Clubs, arts, sports, Kalolsavam, NCC, NSS, and Scouts on our 4.5-acre campus."
        breadcrumbLabel="Campus Life"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Active Student Clubs", value: "12+" },
          { label: "Service Units", value: "NCC • NSS • SPC" },
          { label: "Campus Area", value: "4.5 Acres" },
        ]}
      />
      <CampusLifeSection />
    </div>
  );
}
