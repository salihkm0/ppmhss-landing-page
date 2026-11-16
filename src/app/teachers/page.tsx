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
        eyebrow="FACULTY DIRECTORY"
        title="Our Dedicated"
        highlightWord="Teachers & Mentors"
        description="Meet the passionate subject specialists, department heads, and seasoned educators dedicated to academic rigor, moral grounding, and personalized student mentoring at PPM HSS."
        breadcrumbLabel="Our Teachers"
        backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Teaching Faculty", value: "165+" },
          { label: "Departments", value: "14" },
          { label: "Post-Graduate HSST", value: "85+" },
        ]}
      />
      <TeachersSection />
    </div>
  );
}
