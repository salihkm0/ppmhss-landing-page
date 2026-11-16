"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Compass,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Calendar,
  FileText,
  Quote,
  BookOpen,
  Sparkles,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Trophy,
} from "lucide-react";
import { SCHOOL_INFO, ADMINISTRATION } from "@/data/schoolData";

export default function InstituteSection() {
  const [activeTab, setActiveTab] = useState<
    "about" | "vision" | "administration" | "pta"
  >("about");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "about" ||
        hash === "vision" ||
        hash === "administration" ||
        hash === "pta"
      ) {
        setActiveTab(hash as typeof activeTab);
      }
    }
  }, []);

  return (
    <section id="institute" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Eduka-Style Asymmetric Visual Grid & Institutional Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-8 border-b border-slate-200">
          {/* Left: 3-Image Collage with Arched & Circular Frames (Eduka Style) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Tall Arched Main Image */}
              <div className="relative group">
                <div className="h-[360px] sm:h-[420px] w-full rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                    alt="PPM HSS Students Engaged in Learning"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Academic Excellence
                    </span>
                    <h5 className="text-xs font-bold text-white drop-shadow-sm">
                      Interactive Pedagogy & Mentorship
                    </h5>
                  </div>
                </div>
              </div>

              {/* Right Column: 2 Images (Circular & Rounded) */}
              <div className="space-y-4">
                {/* Top Circular / Oval Image */}
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white group relative">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
                    alt="Classroom Mentorship at PPM HSS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Bottom Rounded Image */}
                <div className="h-44 sm:h-48 w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white group relative">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                    alt="Collaborative Student Study"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] font-bold text-emerald-300 uppercase">
                      Campus Life
                    </span>
                    <p className="text-xs font-bold leading-tight">
                      Peer Collaboration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Heritage Badge */}
            <div className="absolute -bottom-4 left-2 sm:left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5 z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-black text-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-black text-slate-900 leading-none">
                  48+ Years
                </div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">
                  Educational Heritage (Estd. 1976)
                </div>
              </div>
            </div>
          </div>

          {/* Right: Rich Narrative & Feature Callouts */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>About Our Institute</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Our Education System{" "}
                <span className="text-[#008744]">Inspires You More.</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Panakkad Pookkoya Thangal Memorial Higher Secondary School (PPM
                HSS) was founded in 1976 under the Nediyiruppu Muslim Educational
                Association. What began as a community vision has blossomed into
                one of Malappuram&apos;s premier educational landmarks, currently
                empowering over 5,100 students across High School and Higher
                Secondary streams.
              </p>
            </div>

            {/* 2 Feature Callout Rows (Eduka Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  Government-Aided Excellence
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Affiliated with Kerala General Education Dept & DHSE with 194
                  Full A+ in SSLC 2024 and top board exam records.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  4.5-Acre Green Campus
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Modern smart classrooms, Physics/Chemistry/Biology/Computer
                  labs, central library, and spacious athletics grounds.
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 relative">
              <Quote className="w-7 h-7 text-[#008744]/20 absolute top-3 right-4 pointer-events-none" />
              <p className="text-xs italic text-slate-700 leading-relaxed">
                &ldquo;Education is the light that transforms society. At PPM
                HSS, our mission is to nurture intellectual brilliance grounded
                in timeless ethical values, inspiring every student to become a
                compassionate community leader.&rdquo;
              </p>
              <div className="text-[10px] font-bold text-[#008744] mt-2 uppercase tracking-wider">
                — Nediyiruppu Muslim Educational Association
              </div>
            </div>
          </div>
        </div>

        {/* Section Heading & Sub Navigation Pill Tabs */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Explore Institutional Details
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                In-Depth Institutional Profile
              </h3>
            </div>

            {/* Sub Navigation Pill Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "about", label: "Founding Story & Heritage" },
                { id: "vision", label: "Vision, Mission & Values" },
                { id: "administration", label: "Administrative Leadership" },
                { id: "pta", label: "Parent-Teacher Association (PTA)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab 2.1: About Us & Founding Story */}
        {activeTab === "about" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Visual Campus Spotlight: 3 Photo Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
                    alt="PPM HSS Main Academic Wing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#008744] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Main Campus
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">
                    High School & Higher Secondary Wing
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Four-story academic blocks housing modern classrooms,
                    seminar rooms, and student activity spaces.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
                    alt="Central Reference Library"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#008744] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Library Wing
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">
                    Central Reference & Digital Library
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Houses over 15,000 academic titles, science journals, and a
                    silent 120-seat study hall.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
                    alt="Science Laboratories"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#008744] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Research & Labs
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">
                    Senior Science & Computer Labs
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Equipped Physics, Chemistry, Biology, and IT laboratories
                    fostering experiential learning.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Narrative & Fast Facts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6 text-sm text-slate-700 leading-relaxed">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    Founding Story & 48-Year Heritage
                  </h3>
                  <p>
                    Established in <strong>1976</strong> under the <strong>Nediyiruppu Muslim Educational Association (MEA)</strong>,
                    PPM HSS was founded to provide quality education in Nediyiruppu Panchayat.
                    Named in memory of <strong>Panakkad Pookkoya Thangal</strong>, the school began with 3 divisions and 112 students.
                  </p>
                  <p>
                    Today, PPM HSS serves <strong>over 5,100 students</strong> across High School and Higher Secondary sections.
                    The Higher Secondary Wing was sanctioned in 2000–2001 and currently offers Science, Commerce, and Humanities streams.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                      <ShieldCheck className="w-4 h-4 text-[#008744]" />
                      <span>Affiliation & Recognition Details</span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>Recognized Government-Aided School (School Code: 11024)</li>
                      <li>Declared Minority Educational Institution under Section 2(g) of NCMEI Act 2004</li>
                      <li>General Education Department, Government of Kerala</li>
                      <li>Directorate of Higher Secondary Education (DHSE)</li>
                      <li>Kerala Board of Public Examinations (KBPE)</li>
                      <li>Managed by Nediyiruppu MEA (Reg. No. S.22/75)</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                      <Award className="w-4 h-4 text-[#008744]" />
                      <span>Location & Milestone Expansion</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Located <strong>2 km from Kondotty town</strong> along NH 966 on a 4.5-acre campus with 6 science and computer labs, smart classrooms, and library.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Facts Card */}
              <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] border-b border-slate-200 pb-2">
                  Institutional Profile at a Glance
                </h4>
                <div className="space-y-4">
                  {SCHOOL_INFO.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/80"
                    >
                      <span className="text-slate-600">{stat.label}</span>
                      <span className="font-bold text-slate-900 font-mono text-sm">
                        {stat.value}
                        {stat.suffix}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-600">School Code</span>
                    <span className="font-bold text-slate-900 font-mono">
                      11024 (HS & HSS)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-600">Campus Area</span>
                    <span className="font-bold text-slate-900">
                      4.5 Acres (Green Campus)
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5">
                    <span className="text-slate-600">Governing Body</span>
                    <span className="font-semibold text-slate-800 text-right">
                      Nediyiruppu MEA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2.2: Vision, Mission & Values */}
        {activeTab === "vision" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Card with Photo Header */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                    alt="Vision for Scholarly Achievement"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 text-white">
                    <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center font-bold">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Our Guiding Light
                      </span>
                      <h4 className="text-base font-bold text-white">
                        Vision Statement
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-serif">
                    &ldquo;To provide quality education par excellence for everyone and to hold high standards of education for the Muslim community.&rdquo;
                  </p>
                </div>
              </div>

              {/* Mission Card with Photo Header */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
                    alt="Mission for Practical Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 text-white">
                    <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Our Daily Commitment
                      </span>
                      <h4 className="text-base font-bold text-white">
                        Mission Statement
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="text-xs text-slate-700 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                      <span>
                        To promote value-based education, helping students discover their aptitudes and realize their potential by boosting their self-confidence and creative-thinking skills.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                      <span>
                        To provide an inclusive and harmonious educational atmosphere for all students of all communities and social strata.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                      <span>
                        To inculcate excellent moral and ethical values in adolescents.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#008744]" />
                <span>Core Values & Educational Philosophy</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    title: "Academic Excellence",
                    desc: "Strong conceptual grounding, continuous evaluation, and board exam preparation.",
                    icon: GraduationCap,
                  },
                  {
                    title: "Moral Integrity",
                    desc: "Instilling honesty, empathy, and ethical conduct in all spheres of life.",
                    icon: ShieldCheck,
                  },
                  {
                    title: "Inclusivity",
                    desc: "Equal learning opportunities and support for students of all backgrounds.",
                    icon: Users,
                  },
                  {
                    title: "Social Commitment",
                    desc: "Active community involvement through NCC, NSS, and student clubs.",
                    icon: Trophy,
                  },
                ].map((val, i) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-emerald-300 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-[#008744]">
                        {val.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2.3: Administrative Leadership */}
        {activeTab === "administration" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Executive Leadership
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                Administrative Leadership & Messages
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Steered by the visionary Nediyiruppu Muslim Educational
                Association with seasoned academic leaders heading the Higher
                Secondary and High School divisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Manager */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={ADMINISTRATION.manager.photo}
                      alt={ADMINISTRATION.manager.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-[#008744]"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-[#008744] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-sm">
                        Management
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                        {ADMINISTRATION.manager.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {ADMINISTRATION.manager.title}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Qualifications:</strong>
                      <span className="text-right text-slate-600">
                        {ADMINISTRATION.manager.qualification}
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Tenure:</strong>
                      <span className="text-right text-slate-600">
                        {ADMINISTRATION.manager.tenure}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3.5 text-xs text-slate-700 italic space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 font-bold not-italic text-[#008744] text-[11px]">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Manager&apos;s Message</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    &ldquo;{ADMINISTRATION.manager.message}&rdquo;
                  </p>
                </div>
              </div>

              {/* Secretary & Treasurer */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={ADMINISTRATION.secretary.photo}
                      alt={ADMINISTRATION.secretary.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-emerald-600"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-sm">
                        Trust Executive
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                        {ADMINISTRATION.secretary.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {ADMINISTRATION.secretary.title}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Role:</strong>
                      <span className="text-right text-slate-600">
                        Secretary & Treasurer
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Tenure:</strong>
                      <span className="text-right text-slate-600">
                        {ADMINISTRATION.secretary.tenure}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3.5 text-xs text-slate-700 italic space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 font-bold not-italic text-[#008744] text-[11px]">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Secretary&apos;s Message</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    &ldquo;{ADMINISTRATION.secretary.message}&rdquo;
                  </p>
                </div>
              </div>

              {/* Principal */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={ADMINISTRATION.principal.photo}
                      alt={ADMINISTRATION.principal.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-slate-900"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-sm">
                        Higher Secondary Wing
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                        {ADMINISTRATION.principal.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {ADMINISTRATION.principal.title}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Qualifications:</strong>
                      <span className="text-right text-slate-600">
                        {ADMINISTRATION.principal.qualification}
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Tenure:</strong>
                      <span className="text-right text-slate-600">
                        {ADMINISTRATION.principal.tenure}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3.5 text-xs text-slate-700 italic space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 font-bold not-italic text-[#008744] text-[11px]">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Principal&apos;s Message</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    &ldquo;{ADMINISTRATION.principal.message}&rdquo;
                  </p>
                </div>
              </div>

              {/* Headmaster */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={ADMINISTRATION.headmaster.photo}
                      alt={ADMINISTRATION.headmaster.name}
                      className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-[#008744]"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-[#008744] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-sm">
                        High School Wing
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 mt-1 leading-snug">
                        {ADMINISTRATION.headmaster.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {ADMINISTRATION.headmaster.title}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-2.5">
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Qualifications:</strong>
                      <span className="text-right text-slate-600">
                        {ADMINISTRATION.headmaster.qualification}
                      </span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-slate-50 text-[11px]">
                      <strong className="text-slate-800">Role:</strong>
                      <span className="text-right text-slate-600">
                        Headmaster (HS Wing)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3.5 text-xs text-slate-700 italic space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 font-bold not-italic text-[#008744] text-[11px]">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Headmaster&apos;s Message</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    &ldquo;{ADMINISTRATION.headmaster.message}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2.4: PTA (Parent-Teacher Association) */}
        {activeTab === "pta" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Visual PTA Showcase Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                  Parent-Community Collaboration
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Parent-Teacher Association (PTA)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An indispensable democratic body partnering with faculty to
                  safeguard student welfare, support infrastructural upgrades,
                  and ensure academic and moral excellence for over 5,100
                  families.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs">
                    <Mail className="w-3.5 h-3.5 text-[#008744]" />
                    <span className="text-slate-600 font-medium">PTA Desk:</span>
                    <a
                      href={`mailto:${ADMINISTRATION.pta.contactEmail}`}
                      className="font-semibold text-slate-900 hover:text-[#008744] underline"
                    >
                      {ADMINISTRATION.pta.contactEmail}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full font-bold text-[#008744]">
                    <Users className="w-3.5 h-3.5" />
                    <span>General Body: 5,100+ Parents</span>
                  </div>
                </div>
              </div>

              {/* Photo of PTA Assembly / Parent Meeting */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border-2 border-white relative group h-52 sm:h-56">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                  alt="PTA General Body Assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] font-bold text-emerald-300 uppercase">
                    Annual Assembly
                  </span>
                  <p className="text-xs font-bold leading-tight">
                    PTA General Body & Welfare Meet
                  </p>
                </div>
              </div>
            </div>

            {/* Committee Structure & Core Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Executive Committee Structure */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PTA Executive Structure (2024-25)</span>
                </h4>
                <ul className="text-xs text-slate-700 space-y-2.5 border border-slate-200 rounded-2xl p-4 bg-slate-50">
                  <li className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">President:</span>
                    <strong className="text-slate-900 text-right">
                      {ADMINISTRATION.pta.president}
                    </strong>
                  </li>
                  <li className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">
                      Vice President:
                    </span>
                    <strong className="text-slate-900 text-right">
                      {ADMINISTRATION.pta.vicePresident}
                    </strong>
                  </li>
                  <li className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">Secretary:</span>
                    <strong className="text-slate-900 text-right">
                      {ADMINISTRATION.pta.secretary}
                    </strong>
                  </li>
                  <li className="flex justify-between py-1.5 border-b border-slate-200/80">
                    <span className="text-slate-500 font-medium">Treasurer:</span>
                    <strong className="text-slate-900 text-right">
                      {ADMINISTRATION.pta.treasurer}
                    </strong>
                  </li>
                  <li className="flex justify-between py-1.5">
                    <span className="text-slate-500 font-medium">
                      Executive Members:
                    </span>
                    <strong className="text-slate-900 text-right">
                      18 Elected Parent & Staff Reps
                    </strong>
                  </li>
                </ul>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-[#008744]" />
                    <span>Meeting Schedule</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    {ADMINISTRATION.pta.meetingSchedule}
                  </p>
                </div>
              </div>

              {/* Objectives and Activities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Objectives & Core Activities</span>
                </h4>
                <ul className="text-xs text-slate-700 space-y-2.5 bg-slate-50 border border-slate-200 rounded-2xl p-4">
                  {ADMINISTRATION.pta.activities.map((act, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[11px] sm:text-xs">
                        {act}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Published Minutes & Contact for Queries */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#008744] flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    <span>Published Meeting Minutes</span>
                  </h4>
                  <div className="space-y-2">
                    {[
                      {
                        title:
                          "PTA General Body Minutes - Academic Term 2024-25",
                        date: "June 2024",
                        size: "420 KB",
                      },
                      {
                        title:
                          "Executive Resolution on Smart Classroom Upgrades",
                        date: "October 2024",
                        size: "310 KB",
                      },
                      {
                        title:
                          "Annual Merit Day & Scholarship Fund Allocation Minutes",
                        date: "January 2025",
                        size: "580 KB",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs hover:border-emerald-300 transition-colors"
                      >
                        <div className="space-y-0.5 pr-2">
                          <div className="font-bold text-slate-900 text-[11px] leading-tight">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            {item.date} • {item.size}
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            alert(`Downloading PTA Document: "${item.title}"`)
                          }
                          className="shrink-0 px-2.5 py-1 rounded-md bg-[#008744] hover:bg-[#007038] text-white text-[10px] font-bold cursor-pointer"
                        >
                          PDF
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
                  <h5 className="font-bold text-slate-900 text-xs">
                    Contact for PTA Queries
                  </h5>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Parents are invited to direct welfare matters, suggestions, or
                    grievance submissions to the PTA Secretary or President.
                  </p>
                  <div className="pt-1 text-[11px] text-slate-800 space-y-1">
                    <div>
                      <strong>PTA Helpdesk:</strong> +91 483 2712240 (Ext: 106)
                    </div>
                    <div>
                      <strong>Direct Inquiries:</strong> +91 94471 22400
                    </div>
                    <div>
                      <strong>Email:</strong> pta@ppmhsskottukkara.edu.in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Facilities & Heritage Photo Strip (Eduka Bottom Gallery Strip) */}
        <div className="pt-6 border-t border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Campus Life & Facilities
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Explore Our Campus Highlights
              </h3>
            </div>
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline uppercase tracking-wider"
            >
              <span>View Full Campus Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: "Hi-Tech Digital Classrooms",
                cat: "Smart Learning",
                image:
                  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Senior Science Laboratories",
                cat: "Physics & Chemistry",
                image:
                  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Central Reference Library",
                cat: "15,000+ Books",
                image:
                  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Athletics & Sports Ground",
                cat: "Football & Track",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 aspect-[4/3]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                    {card.cat}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight drop-shadow-sm">
                    {card.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}