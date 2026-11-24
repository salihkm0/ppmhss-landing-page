"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Award,
  Users,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Building2,
  FileText,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

interface NoticeItem {
  id?: string;
  _id?: string;
  title: string;
  category: string;
  date: string;
  urgent?: boolean;
}

export default function HomeHighlights() {
  const [aboutData, setAboutData] = useState({
    badge: "About Our School",
    headingPart1: "Quality Education & Character",
    headingHighlight: "Since 1976",
    estdYear: "1976",
    estdText: "Nearly 50 years of educational service in Malappuram district.",
    description:
      "Founded under the Nediyiruppu Muslim Educational Association, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary sections.",
    img1: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop",
    img2: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    img3: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&auto=format&fit=crop",
    feature1Title: "Comprehensive Learning",
    feature1Desc: "Balanced development across sciences, commerce, arts, and sports.",
    feature2Title: "Proven Results",
    feature2Desc: "99.4% pass record with 194 Full A+ in SSLC 2024.",
  });

  const [notices, setNotices] = useState<NoticeItem[]>([
    {
      id: "n1",
      title: "Notice regarding submission of examination fee for Plus Two Board Exam 2025",
      category: "Examinations",
      date: "2025-02-14",
      urgent: true,
    },
    {
      id: "n2",
      title: "Circular on Declaration of Local Holiday on Account of Kondotty Nercha",
      category: "General Orders",
      date: "2025-02-08",
      urgent: false,
    },
    {
      id: "n3",
      title: "Special Coaching Schedule for SSLC Students with Subject Mentors",
      category: "Academic",
      date: "2025-01-10",
      urgent: false,
    },
  ]);

  useEffect(() => {
    // Fetch home page settings if updated from CMS
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.homePageData?.aboutSchool) {
          setAboutData(data.data.homePageData.aboutSchool);
        }
      })
      .catch(() => {});

    // Fetch latest school notices
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data && Array.isArray(data.data) && data.data.length > 0) {
          setNotices(data.data.slice(0, 3));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* ========================================================
          1. CLEAN & DIGNIFIED ABOUT SECTION (UNCLUTTERED)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Single High-Impact Photo Showcase with Estd Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 group">
              <img
                src={aboutData.img1 || "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop"}
                alt="PPM HSS Main Campus Building"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Refined Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg text-slate-900">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Government-Aided
                  </div>
                  <div className="text-sm font-black text-slate-900">
                    Estd. {aboutData.estdYear || "1976"} • Kottukkara
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-500">DHSE Code</div>
                  <div className="text-sm font-mono font-black text-[#008744]">11024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Concise Story & Key Institutional Numbers */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{aboutData.badge || "About Our School"}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {aboutData.headingPart1 || "Quality Education & Character"}{" "}
                <span className="text-[#008744]">{aboutData.headingHighlight || "Since 1976"}</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {aboutData.description ||
                "Founded under the Nediyiruppu Muslim Educational Association, PPM HSS provides quality, government-aided education to over 5,100 students across High School and Higher Secondary sections."}
            </p>

            {/* Clean Key Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">5,100<span className="text-[#008744]">+</span></div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Students</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">165<span className="text-[#008744]">+</span></div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Faculty</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">194</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Full A+ ('24)</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">4.5<span className="text-[#008744]">Ac</span></div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">Campus</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/institute"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Read Full History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Campus Location</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ACADEMIC PROGRAMS & STREAMS (CLEAN 3-CARD SHOWCASE)
      ======================================================== */}
      <section className="bg-slate-50/70 border-y border-slate-200/70 py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
              <GraduationCap className="w-3.5 h-3.5 text-[#008744]" />
              <span>Academic Programs</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Curriculum & Specialized Wings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Recognized Kerala state syllabus with modern ICT classrooms and science laboratories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Wing 1: Higher Secondary */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                    Standards 11 & 12
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors mt-0.5">
                    Higher Secondary (HSE)
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Science (Biology & Computer Science), Commerce, and Humanities streams with state-of-the-art research laboratories.
                  </p>
                </div>
              </div>
              <Link
                href="/academics"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 pt-4 mt-4 border-t border-slate-100 uppercase tracking-wider transition-colors"
              >
                <span>Explore HSE Streams</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Wing 2: High School */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                    Standards 8, 9 & 10
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors mt-0.5">
                    High School Wing (HS)
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    KITE ICT-enabled classrooms, comprehensive language training, basic science practicals, and 194 Full A+ in SSLC 2024.
                  </p>
                </div>
              </div>
              <Link
                href="/academics"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 pt-4 mt-4 border-t border-slate-100 uppercase tracking-wider transition-colors"
              >
                <span>Explore High School</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Wing 3: Campus & Facilities */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                    Infrastructure & Activities
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors mt-0.5">
                    Campus Life & Facilities
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    15,000+ volume central library, high-tech science labs, 4.5-acre playground, NCC, Scouts & Guides, and clubs.
                  </p>
                </div>
              </div>
              <Link
                href="/campus-life"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 pt-4 mt-4 border-t border-slate-100 uppercase tracking-wider transition-colors"
              >
                <span>Explore Campus Life</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OFFICIAL NOTICES & SCHOOL INFO (EXECUTIVE 2-COL)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Latest Notices & Circulars */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                  Official Noticeboard
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                  Latest Circulars & Announcements
                </h3>
              </div>
              <Link
                href="/news-events"
                className="text-xs font-bold text-[#008744] hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-3">
              {notices.map((n, idx) => (
                <div
                  key={n.id || n._id || idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        {n.category}
                      </span>
                      {n.urgent && (
                        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 animate-pulse">
                          Urgent
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-mono">
                        {n.date}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors line-clamp-2">
                      {n.title}
                    </h4>
                  </div>
                  <Link
                    href="/news-events"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#008744] shrink-0 hover:underline"
                  >
                    <span>Read Circular</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Executive School Key Info Card */}
          <div className="lg:col-span-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 space-y-6">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                School Helpdesk
              </span>
              <h4 className="text-lg font-bold text-white">
                PPM HSS Kottukkara
              </h4>
              <p className="text-xs text-slate-400">
                School Code: <span className="font-mono text-emerald-400 font-bold">11024</span> • Govt-Aided
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Kottukkara, Kondotty, Malappuram, Kerala - 673638</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {SCHOOL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <Link
                href="/admissions"
                className="block w-full py-2.5 px-4 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
              >
                Admissions Portal & Info
              </Link>
              <Link
                href="/contact"
                className="block w-full py-2.5 px-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider text-center transition-all border border-slate-700"
              >
                Campus Visit & Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SLEEK ADMISSIONS BANNER (CLEAN & MINIMALIST)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 p-6 sm:p-10 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admissions Open 2025–26</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Join Our Academic Community at Kottukkara
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Assistance for Single Window HSCAP options and Class 8–10 admissions available through our helpdesk.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/admissions"
              className="px-6 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Admissions Guide
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
