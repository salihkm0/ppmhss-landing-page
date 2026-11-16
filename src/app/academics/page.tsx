import React from "react";
import type { Metadata } from "next";
import AcademicsSection from "@/components/AcademicsSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Academics | PPM HSS Kottukkara",
  description:
    "Explore High School and Higher Secondary wings, syllabus, academic calendar, and faculty directory at PPM HSS.",
};

export default function AcademicsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="SCERT & DHSE CURRICULUM"
        title="Academic Programs &"
        highlightWord="Streams"
        description="A rigorous state curriculum spanning Standards 8 to 12, featuring specialized Bio-Science, Computer Science, Commerce, and Humanities streams with modern laboratory training and stellar board results."
        breadcrumbLabel="Academics"
        backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Full A+ in SSLC 2024", value: "194" },
          { label: "Approved Streams", value: "4" },
          { label: "Specialized Labs", value: "6" },
        ]}
      />
      <AcademicsSection />
    </div>
  );
}
