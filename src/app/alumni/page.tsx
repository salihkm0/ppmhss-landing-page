import React from "react";
import type { Metadata } from "next";
import AlumniSection from "@/components/AlumniSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Alumni Association | PPM HSS Kottukkara",
  description: "Official network of PPM HSS alumni across India and abroad. Connect with fellow graduates, register your profile, and join reunions.",
};

export default function AlumniPage() {
  return (
    <div>
      <Breadcrumb currentPage="Alumni Association" />
      <AlumniSection />
    </div>
  );
}
