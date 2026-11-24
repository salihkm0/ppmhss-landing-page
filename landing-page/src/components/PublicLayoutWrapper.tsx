"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import UrgentTicker from "@/components/UrgentTicker";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function PublicLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  return (
    <>
      <Navbar />
      {/* Dynamic top spacer ensuring content starts cleanly below the fixed navbar */}
      <div className="h-[96px] sm:h-[96px] lg:h-[102px] shrink-0" />
      <UrgentTicker />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
