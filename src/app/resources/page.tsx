import React from "react";
import type { Metadata } from "next";
import ResourcesSection from "@/components/ResourcesSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Academic Resources & Downloads | PPM HSS Kottukkara",
  description: "Download previous SSLC and Plus Two question papers, holiday revision worksheets, question banks, timetables, and forms.",
};

export default function ResourcesPage() {
  return (
    <div>
      <Breadcrumb currentPage="Academic Resources & Downloads" />
      <ResourcesSection />
    </div>
  );
}
