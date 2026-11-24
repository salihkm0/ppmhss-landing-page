"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  LogIn,
  ChevronDown,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

interface NavChild {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/institute",
      children: [
        {
          label: "The Institute",
          href: "/institute",
          description: "History, Heritage & Affiliation Details",
        },
        {
          label: "Vision & Philosophy",
          href: "/institute/vision",
          description: "Guiding Principles & Mission Statement",
        },
        {
          label: "Leadership & Administration",
          href: "/institute/leadership",
          description: "Manager, Secretary, Principal & Headmaster",
        },
        {
          label: "Parent-Teacher Association",
          href: "/institute/pta",
          description: "PTA Executive Committee & Welfare Initiatives",
        },
        {
          label: "Alumni Association",
          href: "/alumni",
          description: "Distinguished Alumni & Global Network",
        },
      ],
    },
    {
      label: "Academics",
      href: "/academics",
      children: [
        {
          label: "Academic Programs",
          href: "/academics",
          description: "High School & Higher Secondary Wings",
        },
        {
          label: "Teachers & Faculty",
          href: "/teachers",
          description: "165+ Certified Educators across Departments",
        },
        {
          label: "Scholarships & Aid",
          href: "/academics/scholarships",
          description: "NMMS, USS, Minority & Merit Endowments",
        },
        {
          label: "Academic Calendar",
          href: "/academics/calendar",
          description: "Term Schedules & Examination Timetables",
        },
        {
          label: "Admissions 2025–26",
          href: "/admissions",
          description: "HSCAP Single Window Helpdesk & Eligibility",
        },
      ],
    },
    {
      label: "Campus Life",
      href: "/campus-life",
      children: [
        {
          label: "Facilities & Infrastructure",
          href: "/campus-life",
          description: "Laboratories, Library, Smart Classes & Grounds",
        },
        {
          label: "Clubs & Activities",
          href: "/campus-life/clubs",
          description: "NSS, NCC, Scouts, Eco Club & STEM Forums",
        },
        {
          label: "Hall of Achievements",
          href: "/campus-life/achievements",
          description: "SSLC 100% Pass, Kalolsavam & Sports Awards",
        },
      ],
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Notices",
      href: "/news-events",
    },
    {
      label: "Downloads",
      href: "/resources",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const isExactActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const isNavGroupActive = (item: NavItem) => {
    if (item.children) {
      return (
        isExactActive(item.href) ||
        item.children.some((child) => isExactActive(child.href))
      );
    }
    return isExactActive(item.href);
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* ========================================================
          EXECUTIVE MODERN NAVBAR: DARK TOPBAR + FROSTED GLASS NAV
      ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/60"
        }`}
      >
        {/* Prestigious Deep Midnight Institutional Micro-Bar */}
        <div
          className={`w-full transition-all duration-300 ease-in-out bg-[#0b1320] text-slate-300 border-b border-slate-800/80 overflow-hidden ${
            scrolled
              ? "max-h-0 py-0 opacity-0 pointer-events-none"
              : "max-h-12 py-1.5 opacity-100"
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
            {/* Left: Affiliation & Location */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] sm:text-xs">
              <div className="inline-flex items-center gap-1.5 font-bold text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>DHSE Code: 11024</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <MapPin className="w-3 h-3 text-emerald-400/80 shrink-0" />
                <span>Kottukkara, Malappuram • Govt-Aided (Estd. 1976)</span>
              </div>
            </div>

            {/* Right: Contact & Clean SVG Social Buttons */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-300">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium shrink-0"
              >
                <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="hidden lg:flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium shrink-0"
              >
                <Mail className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </a>

              {/* Clean SVG Social Icons */}
              <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-800 shrink-0">
                <a
                  href="#fb"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS Official Facebook Page");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-800/80 hover:bg-[#008744] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#insta"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS Official Instagram");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-800/80 hover:bg-[#008744] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#yt"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS Official YouTube Channel");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-800/80 hover:bg-[#008744] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="#wa"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS WhatsApp Helpdesk: +91 94471 22400");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-800/80 hover:bg-[#008744] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar with Refined Contemporary Styling */}
        <div className={`w-full transition-all duration-300 ${scrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-3.5"}`}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            {/* School Crest Emblem & Typography */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group py-0.5"
            >
              <img
                src="/images/logo.png"
                alt="PPM HSS Official Crest"
                className={`w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-all duration-300 shrink-0 ${
                  scrolled ? "h-9 sm:h-10" : "h-10 sm:h-11"
                }`}
              />
              <div className="flex flex-col shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 leading-none font-serif">
                    P.P.M.H.S.S
                  </span>
                  <span className="hidden xl:inline-block text-[11px] font-medium text-slate-400 border-l border-slate-300 pl-2 leading-none">
                    Estd. 1976
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#008744] tracking-widest uppercase mt-0.5">
                  Kottukkara • Malappuram
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Contemporary Mixed-Case Typography */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-slate-700">
              {navItems.map((item) => {
                const active = isNavGroupActive(item);

                if (item.children && item.children.length > 0) {
                  return (
                    <div
                      key={item.label}
                      className="relative group py-2 hover:z-[9999]"
                    >
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                          active
                            ? "text-[#008744] font-bold bg-emerald-50/90"
                            : "text-slate-700 hover:text-[#008744] hover:bg-slate-100/70"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#008744]" />
                      </Link>

                      {/* Frosted Glass Dropdown Menu */}
                      <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-[9999]">
                        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200/80 p-2 overflow-hidden ring-1 ring-slate-900/5 space-y-1">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={`group/item flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                                isExactActive(sub.href)
                                  ? "text-[#008744] bg-emerald-50 font-bold"
                                  : "text-slate-800 hover:text-[#008744] hover:bg-emerald-50/60"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold leading-tight">
                                  {sub.label}
                                </span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#008744] group-hover/item:translate-x-0.5 transition-all" />
                              </div>
                              {sub.description && (
                                <span className="text-[10px] text-slate-500 font-normal mt-0.5 leading-tight group-hover/item:text-slate-600">
                                  {sub.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                      active
                        ? "text-[#008744] font-bold bg-emerald-50/90"
                        : "text-slate-700 hover:text-[#008744] hover:bg-slate-100/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & Portal CTA */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Quick Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 rounded-full bg-slate-100/80 hover:bg-emerald-50 text-slate-600 hover:text-[#008744] border border-slate-200/80 hover:border-emerald-300 flex items-center justify-center transition-all cursor-pointer shrink-0 hover:scale-105 active:scale-95 shadow-2xs"
                title="Search Portal"
                aria-label="Search Portal"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Modern Portal Login Pill CTA */}
              <a
                href="https://manage.ppmhsskottukkara.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#008744] to-emerald-700 hover:from-[#007038] hover:to-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-emerald-900/20 hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 border border-emerald-400/30 cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>HS Portal</span>
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100/80 cursor-pointer shrink-0 transition-colors"
                aria-label="Open mobile navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/80 px-4 py-4 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="PPM HSS Crest"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-sm font-black text-slate-900 font-serif">
                  P.P.M.H.S.S
                </div>
                <div className="text-[10px] font-bold text-[#008744] uppercase tracking-wider">
                  Kottukkara • Malappuram
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const active = isNavGroupActive(item);
                const isExpanded = mobileExpanded === item.label;

                if (item.children && item.children.length > 0) {
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => toggleMobileGroup(item.label)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${
                          active
                            ? "bg-emerald-50 text-[#008744]"
                            : "text-slate-800 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#008744]" : "text-slate-400"
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-4 pr-1 py-1 space-y-1 bg-slate-50/80 backdrop-blur-md rounded-xl border border-slate-100">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={closeMobile}
                              className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                                isExactActive(sub.href)
                                  ? "text-[#008744] bg-emerald-50 font-bold"
                                  : "text-slate-600 hover:text-[#008744] hover:bg-slate-50"
                              }`}
                            >
                              <div className="font-semibold text-slate-900">
                                {sub.label}
                              </div>
                              {sub.description && (
                                <div className="text-[10px] text-slate-500 mt-0.5">
                                  {sub.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeMobile}
                    className={`block px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-all ${
                      active
                        ? "bg-[#008744] text-white shadow-xs"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="https://manage.ppmhsskottukkara.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-[#008744] to-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <LogIn className="w-4 h-4" />
                <span>HS Portal Login</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal */}
      {searchModalOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-slate-950/60 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            className="bg-white/95 backdrop-blur-2xl rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-white/60 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008744]">
                <Search className="w-4 h-4 text-[#008744]" />
                <span>Search PPM HSS Portal</span>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                autoFocus
                placeholder="Search programs, admissions, faculty, downloads..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50/90 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#008744] text-slate-800"
              />

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pt-2">
                Quick Shortcuts:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
                {[
                  { label: "Home", href: "/" },
                  { label: "The Institute", href: "/institute" },
                  { label: "Academic Programs", href: "/academics" },
                  { label: "Teachers & Faculty", href: "/teachers" },
                  { label: "Admissions 2025–26", href: "/admissions" },
                  { label: "Campus Life", href: "/campus-life" },
                  { label: "Question Papers", href: "/resources" },
                  { label: "News & Circulars", href: "/news-events" },
                  { label: "Alumni Network", href: "/alumni" },
                  { label: "Contact Us", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setSearchModalOpen(false)}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-[#008744] text-slate-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
