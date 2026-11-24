"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    if (isAdmin) return;

    // IntersectionObserver for smooth scroll-down transitions on all pages
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        "section:not(.no-scroll-reveal), .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-zoom"
      );
      elements.forEach((el) => {
        if (
          el.tagName.toLowerCase() === "section" &&
          !el.classList.contains("scroll-reveal") &&
          !el.classList.contains("scroll-reveal-left") &&
          !el.classList.contains("scroll-reveal-right") &&
          !el.classList.contains("scroll-reveal-zoom")
        ) {
          el.classList.add("scroll-reveal");
        }
        observer.observe(el);
      });
    };

    observeElements();

    // Re-check after async content loads
    const t1 = setTimeout(observeElements, 250);
    const t2 = setTimeout(observeElements, 750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [pathname, isAdmin]);

  if (isAdmin) {
    return <div className="min-h-screen flex flex-col">{children}</div>;
  }

  return (
    <>
      <Navbar />
      {/* Top spacer ensuring content starts cleanly below the fixed navbar */}
      <div className="h-[96px] sm:h-[100px] lg:h-[104px] shrink-0" />
      <UrgentTicker />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
