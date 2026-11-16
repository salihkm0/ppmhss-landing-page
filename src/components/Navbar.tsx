"use client";

import React, { useState } from "react";
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

  // Consolidated navigation: Every dropdown item points to a DISTINCT page!
  // No multiple nav items point to the same page.
  const navItems: NavItem[] = [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "ABOUT US",
      href: "/institute",
      children: [
        {
          label: "The Institute",
          href: "/institute",
          description: "Founding Story, Vision, Administration & PTA",
        },
        {
          label: "Alumni Association",
          href: "/alumni",
          description: "Distinguished Alumni & Global Network",
        },
        {
          label: "News & Announcements",
          href: "/news-events",
          description: "Official Circulars, Notices & Highlights",
        },
      ],
    },
    {
      label: "ACADEMICS",
      href: "/academics",
      children: [
        {
          label: "Academic Programs",
          href: "/academics",
          description: "High School, Higher Secondary & Curriculum",
        },
        {
          label: "Teachers & Faculty",
          href: "/teachers",
          description: "165+ Accredited Educators & Department Mentors",
        },
        {
          label: "Admissions 2025-26",
          href: "/admissions",
          description: "Eligibility Criteria, Guidelines & Applications",
        },
      ],
    },
    {
      label: "CAMPUS LIFE",
      href: "/campus-life",
    },
    {
      label: "GALLERY",
      href: "/gallery",
    },
    {
      label: "DOWNLOADS",
      href: "/resources",
    },
    {
      label: "CONTACT US",
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
      <header className="sticky top-0 z-[100] w-full bg-white shadow-xs">
        {/* Light Institutional Top Bar (Clean, Professional, Light Theme) */}
        <div className="w-full bg-slate-50 text-slate-600 py-1.5 px-4 sm:px-6 lg:px-8 text-xs font-medium border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            {/* Left Info: Code & Location */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-600 text-[11px] sm:text-xs shrink-0">
              <div className="flex items-center gap-1.5 font-bold text-[#008744] bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200/60 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                <span>DHSE School Code: 11024</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-slate-600 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Kottukkara, Kondotty, Malappuram (Estd. 1976)</span>
              </div>
            </div>

            {/* Right Info: Contact & Social */}
            <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="flex items-center gap-1.5 text-slate-700 hover:text-[#008744] font-semibold transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </a>
              <span className="hidden sm:inline text-slate-300">•</span>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="hidden lg:flex items-center gap-1.5 text-slate-600 hover:text-[#008744] transition-colors shrink-0"
              >
                <Mail className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </a>

              {/* Social Round Buttons */}
              <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-200 shrink-0">
                <a
                  href="#fb"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS Official Facebook Page");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-200 hover:bg-[#008744] text-slate-600 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  title="Facebook"
                >
                  f
                </a>
                <a
                  href="#insta"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS Official Instagram");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-200 hover:bg-[#008744] text-slate-600 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  title="Instagram"
                >
                  in
                </a>
                <a
                  href="#yt"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS Official YouTube Channel");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-200 hover:bg-[#008744] text-slate-600 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  title="YouTube"
                >
                  yt
                </a>
                <a
                  href="#wa"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("PPM HSS WhatsApp Helpdesk: +91 94471 22400");
                  }}
                  className="w-5 h-5 rounded-full bg-slate-200 hover:bg-[#008744] text-slate-600 hover:text-white flex items-center justify-center text-[10px] transition-colors"
                  title="WhatsApp"
                >
                  wa
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Brand & Navigation Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
          {/* Official School Crest & Title (Eduka Clean Badge) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group py-0.5"
          >
            <img
              src="/images/logo.png"
              alt="PPM HSS Official Crest"
              className="h-10 sm:h-11 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0"
            />
            <div className="flex flex-col shrink-0">
              <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 leading-none font-serif whitespace-nowrap">
                P.P.M.H.S.S
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-[#008744] tracking-wider uppercase mt-0.5 whitespace-nowrap">
                Kottukkara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns (>= 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-slate-800 shrink-0">
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
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap cursor-pointer ${
                        active
                          ? "text-[#008744] font-black"
                          : "text-slate-700 hover:text-[#008744]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#008744]" />
                    </Link>

                    {/* Dropdown Menu Box */}
                    <div className="absolute top-full left-0 pt-1.5 w-64 xl:w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-[9999]">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-100 p-2 overflow-hidden ring-1 ring-slate-900/10 space-y-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={`group/item flex flex-col px-3.5 py-2.5 rounded-xl transition-all ${
                              isExactActive(sub.href)
                                ? "text-[#008744] bg-emerald-50 font-bold"
                                : "text-slate-800 hover:text-[#008744] hover:bg-emerald-50/70"
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
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap ${
                    active
                      ? "text-[#008744] font-black"
                      : "text-slate-700 hover:text-[#008744]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Quick Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 hover:text-[#008744] hover:border-emerald-300 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title="Search Portal"
              aria-label="Search Portal"
            >
              <Search className="w-3.5 h-3.5" />
            </button>

            {/* HS Login Redirect Button */}
            <a
              href="https://manage.ppmhsskottukkara.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>HS Login</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md text-slate-800 hover:bg-slate-100 cursor-pointer shrink-0"
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

        {/* Mobile Navigation Drawer with Accordion Sub-Menus */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="pb-3 mb-2 border-b border-slate-100 flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="PPM HSS Crest"
                className="h-10 w-auto object-contain"
              />
              <div className="text-xs font-bold text-slate-900">
                Panakkad Pookkoya Thangal Memorial HSS
              </div>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const active = isNavGroupActive(item);
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = mobileExpanded === item.label;

                if (hasChildren) {
                  return (
                    <div
                      key={item.label}
                      className="rounded-xl overflow-hidden border border-slate-100"
                    >
                      <div className="flex items-center justify-between bg-slate-50/80 px-4 py-2.5">
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className={`text-xs font-bold uppercase tracking-wider ${
                            active ? "text-[#008744]" : "text-slate-800"
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => toggleMobileGroup(item.label)}
                          className="p-1 rounded-md text-slate-500 hover:text-[#008744]"
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-180 text-[#008744]" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {isExpanded && (
                        <div className="bg-white px-3 py-2 space-y-1 border-t border-slate-100">
                          {item.children!.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={closeMobile}
                              className={`block py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
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
                    className={`block px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
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
                className="w-full py-2.5 text-center rounded-xl bg-[#008744] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
              >
                <LogIn className="w-4 h-4" />
                <span>HS Login</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Modal */}
      {searchModalOpen && (
        <div
          className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-xs flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008744]">
                <Search className="w-4 h-4 text-[#008744]" />
                <span>Search PPM HSS Portal</span>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                autoFocus
                placeholder="Search pages, question papers, courses, admission info..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#008744] text-slate-800"
              />

              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pt-2">
                Quick Page Navigation:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
                {[
                  { label: "Home", href: "/" },
                  { label: "The Institute", href: "/institute" },
                  { label: "Academic Programs", href: "/academics" },
                  { label: "Teachers & Faculty", href: "/teachers" },
                  { label: "Admissions 2025-26", href: "/admissions" },
                  { label: "Campus Life & Arts", href: "/campus-life" },
                  { label: "Downloads & Papers", href: "/resources" },
                  { label: "News & Events", href: "/news-events" },
                  { label: "Alumni Association", href: "/alumni" },
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