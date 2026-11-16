import React from "react";
import type { Metadata } from "next";
import GallerySection from "@/components/GallerySection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Campus Photo Gallery | PPM HSS Kottukkara",
  description:
    "Photo gallery capturing campus life, science labs, arts festivals, sports victories, and institutional milestones at PPM HSS Kottukkara.",
};

export default function GalleryPage() {
  return (
    <div>
      <PageBanner
        eyebrow="CAMPUS PHOTO ALBUM"
        title="Photo & Media"
        highlightWord="Gallery"
        description="Moments from academic sessions, science labs, cultural festivals, athletics, and campus celebrations."
        breadcrumbLabel="Gallery"
        backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Photo Albums", value: "6 Categories" },
          { label: "Campus Moments", value: "100+" },
          { label: "Events Covered", value: "25+" },
        ]}
      />
      <GallerySection />
    </div>
  );
}
