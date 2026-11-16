import React from "react";
import type { Metadata } from "next";
import CampusLifeSection from "@/components/CampusLifeSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Campus Life & Facilities | PPM HSS Kottukkara",
  description: "Discover facilities, student clubs, performing arts, athletics, achievements, and the media gallery at PPM HSS.",
};

export default function CampusLifePage() {
  return (
    <div>
      <Breadcrumb currentPage="Campus Life & Facilities" />
      <CampusLifeSection />
    </div>
  );
}
