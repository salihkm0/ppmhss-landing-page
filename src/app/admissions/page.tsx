import React from "react";
import type { Metadata } from "next";
import AdmissionsSection from "@/components/AdmissionsSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Admissions 2025-26 | PPM HSS Kottukkara",
  description: "Official admissions portal for High School and Plus One (+1) at PPM HSS Kottukkara. Eligibility, process, fee structure, and online registration.",
};

export default function AdmissionsPage() {
  return (
    <div>
      <Breadcrumb currentPage="Admissions 2025-26" />
      <AdmissionsSection />
    </div>
  );
}
