import React from "react";
import type { Metadata } from "next";
import InstituteSection from "@/components/InstituteSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "The Institute | PPM HSS Kottukkara",
  description:
    "Learn about the history, founding under Nediyiruppu MEA, vision, mission, and administration of PPM HSS.",
};

export default function InstitutePage() {
  return (
    <div>
      <PageBanner
        eyebrow="FOUNDED 1976 • MALAPPURAM"
        title="About Our"
        highlightWord="Institute"
        description="Established under the Nediyiruppu Muslim Educational Association, Panakkad Pookkoya Thangal Memorial Higher Secondary School has nurtured academic distinction, moral integrity, and social leadership for nearly five decades."
        breadcrumbLabel="The Institute"
        backgroundImage="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Founded", value: "1976" },
          { label: "Campus Area", value: "4.5 Acres" },
          { label: "Enrolled Students", value: "4,600+" },
        ]}
      />
      <InstituteSection />
    </div>
  );
}
