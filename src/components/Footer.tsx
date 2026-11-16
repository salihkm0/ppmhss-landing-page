"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Heart,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 text-xs overflow-hidden">
      {/* Top Accent Gradient Line with Emerald Green */}
      <div className="h-1 bg-gradient-to-r from-emerald-600 via-teal-400 to-[#008744]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Identity & Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group">
              <img
                src="/images/logo.png"
                alt="PPM HSS Official Crest"
                className="h-16 w-auto object-contain bg-white/95 p-1 rounded-xl shadow-md group-hover:scale-105 transition-transform"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-tight text-white font-serif">
                    PPM HSS KOTTUKKARA
                  </span>
                </div>
                <p className="text-[11px] text-emerald-300 font-semibold">
                  Estd. 1976 • School Code: 11024
                </p>
                <p className="text-[10px] text-slate-300">
                  Panakkad Pookkoya Thangal Memorial Higher Secondary School
                </p>
              </div>
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Governed by the Nediyiruppu Muslim Educational Association.
              Recognized Government-Aided Higher Secondary Institution under the
              General Education Department, Government of Kerala.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs font-semibold text-slate-300">Social:</span>
              <a
                href="#fb"
                onClick={(e) => { e.preventDefault(); alert("PPM HSS Official Facebook"); }}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#008744] text-white flex items-center justify-center text-xs transition-colors"
                title="Facebook"
              >
                f
              </a>
              <a
                href="#insta"
                onClick={(e) => { e.preventDefault(); alert("PPM HSS Official Instagram"); }}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#008744] text-white flex items-center justify-center text-xs transition-colors"
                title="Instagram"
              >
                in
              </a>
              <a
                href="#yt"
                onClick={(e) => { e.preventDefault(); alert("PPM HSS Official YouTube"); }}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#008744] text-white flex items-center justify-center text-xs transition-colors"
                title="YouTube"
              >
                yt
              </a>
              <a
                href="#wa"
                onClick={(e) => { e.preventDefault(); alert("PPM HSS WhatsApp Helpdesk: +91 94471 22400"); }}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#008744] text-white flex items-center justify-center text-xs transition-colors"
                title="WhatsApp"
              >
                wa
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 border-b border-white/15 pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-slate-200">
              {[
                { href: "/institute", label: "About The Institute" },
                { href: "/academics", label: "Academics & Streams" },
                { href: "/teachers", label: "Our Teachers & Faculty" },
                { href: "/admissions", label: "Admissions 2025-26" },
                { href: "/resources", label: "Question Papers & Downloads" },
                { href: "/campus-life", label: "Campus Life & Clubs" },
                { href: "/news-events", label: "News & Noticeboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Community & Portals */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 border-b border-white/15 pb-2">
              Community
            </h4>
            <ul className="space-y-2 text-slate-200">
              {[
                { href: "/alumni", label: "Alumni Association" },
                { href: "/logins", label: "Teacher ERP Portal" },
                { href: "/logins", label: "Student Dashboard" },
                { href: "/logins", label: "Parent Progress Monitor" },
                { href: "/contact", label: "Campus Map & Directory" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 border-b border-white/15 pb-2">
              School Helpdesk
            </h4>
            <div className="space-y-2.5 text-slate-200 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                <span>Kottukkara, Kondotty, Malappuram, Kerala - 673638</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {SCHOOL_INFO.email}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/logins"
                  className="block w-full py-2.5 px-4 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold transition-all text-center shadow-md shadow-emerald-950/30"
                >
                  ERP & Portal Sign-In
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Mandatory Compliance Bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-white font-bold">Mandatory Disclosures:</span>
            <a
              href="#rti"
              onClick={(e) => {
                e.preventDefault();
                alert("Right to Information (RTI) Cell: Public Information Officer - Principal Prof. K. Abdul Rasheed");
              }}
              className="hover:text-emerald-300 transition-colors"
            >
              RTI Cell
            </a>
            <span>•</span>
            <a
              href="#antiragging"
              onClick={(e) => {
                e.preventDefault();
                alert("Anti-Ragging Committee constituted pursuant to Kerala Education Rules.");
              }}
              className="hover:text-emerald-300 transition-colors"
            >
              Anti-Ragging
            </a>
            <span>•</span>
            <a
              href="#pocso"
              onClick={(e) => {
                e.preventDefault();
                alert("POCSO Internal Compliance Committee in active enforcement.");
              }}
              className="hover:text-emerald-300 transition-colors"
            >
              Child Safety
            </a>
            <span>•</span>
            <a
              href="#citizen"
              onClick={(e) => {
                e.preventDefault();
                alert("Citizen's Charter available at the school administrative counter.");
              }}
              className="hover:text-emerald-300 transition-colors"
            >
              Citizens Charter
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#008744] text-white transition-all cursor-pointer shrink-0 font-bold"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Final Copyright */}
        <div className="border-t border-white/15 pt-4 text-center text-[11px] text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © 2025 Panakkad Pookkoya Thangal Memorial Higher Secondary School (PPM HSS), Kottukkara. All Rights Reserved.
          </div>
          <div className="font-mono text-slate-300">
            MERN Stack • Next.js App Router
          </div>
        </div>
      </div>
    </footer>
  );
}
