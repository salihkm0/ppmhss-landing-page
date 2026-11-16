import React from "react";
import type { Metadata } from "next";
import AdmissionsSection from "@/components/AdmissionsSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Admissions 2025-26 | PPM HSS Kottukkara",
  description:
    "Official admissions portal for High School and Plus One (+1) at PPM HSS Kottukkara. Eligibility, process, fee structure, and online registration.",
};

export default function AdmissionsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="ACADEMIC YEAR 2025-26"
        title="Admissions &"
        highlightWord="Enrollment"
        description="Join the legacy of excellence at PPM HSS Kottukkara. Transparent merit-based admission guidelines for High School (Classes 8-10) and Higher Secondary (+1 & +2 Science, Commerce, and Humanities)."
        breadcrumbLabel="Admissions"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Status", value: "Open 2025-26" },
          { label: "High School Wings", value: "English & Malayalam" },
          { label: "HSE Single Window", value: "HSCAP Code 11024" },
        ]}
      />
      <AdmissionsSection />
    </div>
  );
}
