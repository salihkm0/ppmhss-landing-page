import React from "react";
import type { Metadata } from "next";
import LoginsSection from "@/components/LoginsSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Portals & Logins | PPM HSS Kottukkara",
  description:
    "Direct authenticated portals for teachers, students, parents, and administrative staff at PPM HSS Kottukkara.",
};

export default function LoginsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="DIGITAL GATEWAYS"
        title="School Portals &"
        highlightWord="Logins"
        description="Direct portals for HS Management, DHSE, Sametham, and KITE ICT services."
        breadcrumbLabel="Portals & Logins"
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "HS Portal", value: "manage.ppmhsskottukkara.com" },
          { label: "DHSE Code", value: "11024" },
          { label: "Encryption", value: "SSL / TLS 256-Bit" },
        ]}
      />
      <LoginsSection />
    </div>
  );
}
