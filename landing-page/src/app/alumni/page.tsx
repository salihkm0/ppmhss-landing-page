import React from "react";
import type { Metadata } from "next";
import AlumniSection from "@/components/AlumniSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Alumni Association | PPM HSS Kottukkara",
  description:
    "Official network of PPM HSS alumni across India and abroad. Connect with fellow graduates, register your profile, and join reunions.",
};

export default function AlumniPage() {
  return (
    <div>
      <PageBanner
        eyebrow="GLOBAL PPM HSS NETWORK"
        title="Alumni"
        highlightWord="Association"
        description="Connecting generations of graduates since 1976 across professions worldwide."
        breadcrumbLabel="Alumni"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Active Network", value: "25,000+ Alumni" },
          { label: "Chapters", value: "Kerala • Gulf • Global" },
          { label: "Mentorship", value: "Active Guidance" },
        ]}
      />
      <AlumniSection />
    </div>
  );
}
