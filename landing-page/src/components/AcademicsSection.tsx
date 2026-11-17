"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  FlaskConical,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Award,
  Sparkles,
  Layers,
} from "lucide-react";
import { ACADEMIC_STREAMS } from "@/data/schoolData";

export default function AcademicsSection() {
  const highSchoolClasses = [
    {
      grade: "Standard 8",
      subtitle: "Foundation Stage",
      desc: "Foundational transition to secondary curriculum focusing on core language proficiency, mathematics fundamentals, basic science practicals, and IT literacy.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      badge: "Class VIII",
      focus: "IT Practicals & Basic Sciences",
    },
    {
      grade: "Standard 9",
      subtitle: "Intermediate Preparation",
      desc: "Deepening analytical concepts in physical sciences, social sciences, and algebraic mathematics, integrated with continuous formative term evaluations.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      badge: "Class IX",
      focus: "Formative & Summative Series",
    },
    {
      grade: "SSLC (Standard 10)",
      subtitle: "State Board Milestone",
      desc: "Intensive board examination coaching, chapter-wise revisions, morning study clinics, and state model exam drills resulting in 194 Full A+ achievers in 2024.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      badge: "Board Exam Year",
      focus: "100% Pass • 194 Full A+",
    },
  ];

  const academicSubpages = [
    {
      title: "Faculty & Subject Specialists",
      desc: "165+ accredited educators across High School and Higher Secondary departments.",
      href: "/teachers",
      icon: GraduationCap,
      tag: "Faculty Directory",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Scholarships & Endowments",
      desc: "NMMS, USS, Post-Matric Minority aid, and PPM HSS endowed merit awards.",
      href: "/academics/scholarships",
      icon: Award,
      tag: "Financial Aid",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Academic Calendar & Exams",
      desc: "Term schedules, SSLC and Higher Secondary board examination dates.",
      href: "/academics/calendar",
      icon: Calendar,
      tag: "Timeline",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Admissions 2025–26",
      desc: "Eligibility criteria, single window HSCAP helpdesk, and application steps.",
      href: "/admissions",
      icon: ShieldCheck,
      tag: "Admissions",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-slate-50/50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Intro */}
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Streams</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Academic Programs & <span className="text-[#008744]">Streams</span>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Kerala State curriculum under the General Education Department (SCERT & DHSE) spanning Standards 8 through 12.
          </p>
        </div>

        {/* Section 1: High School Wing with Rich Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Standards 8, 9 & 10
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-1">
                High School Wing
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              KBPE Curriculum • Mediums: Malayalam & English
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highSchoolClasses.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.grade}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Grade Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Focus Pill */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="inline-block text-[11px] font-semibold text-white/95 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.focus}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-[#008744] uppercase tracking-wider">
                      {item.subtitle}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors">
                      {item.grade}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Curriculum: SCERT Kerala</span>
                    <span className="font-bold text-emerald-700">Enrolling</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Higher Secondary Wing with Visual Cards */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Classes 11 & 12 (+1 & +2)
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Higher Secondary Approved Streams
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Affiliated with Directorate of Higher Secondary Education (DHSE School Code: 11024).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ACADEMIC_STREAMS.map((st) => (
              <div
                key={st.code}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={st.imageUrl}
                    alt={st.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  {/* Floating Stream Code */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                      Stream Code: {st.code}
                    </span>
                  </div>

                  {/* Seats Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block text-[11px] font-mono font-bold text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      {st.seats} Approved Seats
                    </span>
                  </div>

                  {/* Stream Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-black text-white drop-shadow-md">
                      {st.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {st.description}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                          Core Subjects
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {st.coreSubjects.map((sub, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-medium bg-white text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <strong className="text-slate-700">Languages:</strong>{" "}
                          <span className="text-slate-600">{st.languages.join(", ")}</span>
                        </div>
                        <div>
                          <strong className="text-slate-700">Laboratories:</strong>{" "}
                          <span className="text-slate-600">{st.labs.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline"
                    >
                      <span>HSCAP Admission Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      DHSE 11024
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Academic Subpages Navigation Cards with Image Headers */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Related Academic Sections
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Academic Resources & Faculty
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicSubpages.map((sub, idx) => {
              const IconComp = sub.icon;
              return (
                <Link
                  key={idx}
                  href={sub.href}
                  className="group bg-white rounded-3xl border border-slate-200/90 hover:border-emerald-300 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-slate-900">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-400/20 shadow-sm">
                      {sub.tag}
                    </span>
                    <div className="absolute bottom-2.5 left-3 text-white flex items-center gap-1.5">
                      <IconComp className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold truncate">{sub.title}</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sub.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#008744] group-hover:underline">
                      <span>View Section</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
