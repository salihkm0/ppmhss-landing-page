import React from "react";
import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import TeachersSection from "@/components/TeachersSection";

export const metadata: Metadata = {
  title: "Our Teachers & Faculty | PPM HSS Kottukkara",
  description:
    "Meet the 165+ accredited teachers, department heads, and academic mentors guiding High School and Higher Secondary students at PPM HSS Kottukkara.",
};

export default function TeachersPage() {
  return (
    <div>
      <PageBanner
        eyebrow="Faculty Directory"
        title="Our Dedicated"
        highlightWord="Teachers"
        description="Meet the passionate subject specialists, seasoned educators, and mentors inspiring academic excellence and moral leadership at PPM HSS."
        breadcrumbLabel="Our Teachers"
      />
      <TeachersSection />
    </div>
  );
}

