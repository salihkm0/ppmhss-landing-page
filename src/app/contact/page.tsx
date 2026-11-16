import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | PPM HSS Kottukkara",
  description: "Official contact directory, interactive campus map, office timings, phone numbers, and inquiry desk for PPM HSS Kottukkara.",
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumb currentPage="Contact Us" />
      <ContactSection />
    </div>
  );
}
