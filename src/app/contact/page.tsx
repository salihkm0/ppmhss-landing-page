import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Contact Us | PPM HSS Kottukkara",
  description:
    "Official contact directory, interactive campus map, office timings, phone numbers, and inquiry desk for PPM HSS Kottukkara.",
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        eyebrow="CONNECT WITH US"
        title="Contact"
        highlightWord="Our School Office"
        description="Reach out to the administrative desk, admissions helpline, or visit our lush 4.5-acre green campus situated in Kottukkara, Kondotty, Malappuram district."
        breadcrumbLabel="Contact Us"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "HS Helpline", value: "+91 483 2711374" },
          { label: "HSE Office", value: "+91 483 2714174" },
          { label: "School Code", value: "11024" },
        ]}
      />
      <ContactSection />
    </div>
  );
}
