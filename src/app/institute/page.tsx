import React from "react";
import type { Metadata } from "next";
import InstituteSection from "@/components/InstituteSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "The Institute | PPM HSS Kottukkara",
  description: "Learn about the history, founding under Nediyiruppu MEA, vision, mission, and administration of PPM HSS.",
};

export default function InstitutePage() {
  return (
    <div>
      <Breadcrumb currentPage="The Institute" />
      <InstituteSection />
    </div>
  );
}
