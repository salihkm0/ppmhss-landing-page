import React from "react";
import type { Metadata } from "next";
import LoginsSection from "@/components/LoginsSection";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Portals & Logins | PPM HSS Kottukkara",
  description: "Direct authenticated portals for teachers, students, parents, and administrative staff at PPM HSS Kottukkara.",
};

export default function LoginsPage() {
  return (
    <div>
      <Breadcrumb currentPage="Portals & Logins" />
      <LoginsSection />
    </div>
  );
}
