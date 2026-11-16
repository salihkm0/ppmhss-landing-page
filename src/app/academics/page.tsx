import React from "react";
import type { Metadata } from "next";
import AcademicsSection from "@/components/AcademicsSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Academics | PPM HSS Kottukkara",
  description: "Explore High School and Higher Secondary wings, syllabus, academic calendar, and faculty directory at PPM HSS.",
};

export default function AcademicsPage() {
  return (
    <div>
      <Breadcrumb currentPage="Academics" />
      <AcademicsSection />
    </div>
  );
}
