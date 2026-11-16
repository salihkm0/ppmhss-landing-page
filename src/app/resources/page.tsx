import React from "react";
import type { Metadata } from "next";
import ResourcesSection from "@/components/ResourcesSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Academic Resources & Downloads | PPM HSS Kottukkara",
  description:
    "Download previous SSLC and Plus Two question papers, holiday revision worksheets, question banks, timetables, and forms.",
};

export default function ResourcesPage() {
  return (
    <div>
      <PageBanner
        eyebrow="ACADEMIC REPOSITORY"
        title="Downloads &"
        highlightWord="Resources"
        description="Previous question papers, question banks, worksheets, exam timetables, and forms."
        breadcrumbLabel="Downloads"
        backgroundImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Available Downloads", value: "250+ Files" },
          { label: "Format", value: "PDF Downloadable" },
          { label: "Access", value: "Open to All Students" },
        ]}
      />
      <ResourcesSection />
    </div>
  );
}
