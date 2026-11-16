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
} from "lucide-react";
import { ACADEMIC_STREAMS } from "@/data/schoolData";

export default function AcademicsSection() {
  const academicSubpages = [
    {
      title: "Faculty & Subject Specialists",
      desc: "165+ accredited educators across High School and Higher Secondary departments.",
      href: "/teachers",
      icon: GraduationCap,
      tag: "Faculty",
    },
    {
      title: "Scholarships & Endowments",
      desc: "NMMS, USS, Post-Matric Minority aid, and PPM HSS endowed merit awards.",
      href: "/academics/scholarships",
      icon: Award,
      tag: "Financial Aid",
    },
    {
      title: "Academic Calendar & Exams",
      desc: "Term schedules, SSLC and Higher Secondary board examination dates.",
      href: "/academics/calendar",
      icon: Calendar,
      tag: "Timeline",
    },
    {
      title: "Admissions 2025–26",
      desc: "Eligibility criteria, single window HSCAP helpdesk, and application steps.",
      href: "/admissions",
      icon: ShieldCheck,
      tag: "Admissions",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
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

        {/* Section 1: High School Wing */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                Standards 8, 9 & 10
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                High School Wing
              </h2>
            </div>
            <div className="text-xs text-slate-500">
              KBPE Curriculum • Mediums: Malayalam & English
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Standard 8</h3>
              <p className="text-xs text-slate-600">
                Foundation year transitioning to secondary curriculum with core subjects, IT practicals, and club activities.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">Standard 9</h3>
              <p className="text-xs text-slate-600">
                Advanced concepts in Mathematics, Sciences, and Social Sciences with formative term assessments.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">SSLC (Standard 10)</h3>
              <p className="text-xs text-slate-600">
                Targeted board examination coaching, model exam series, and revision clinics. (194 Full A+ in 2024).
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Higher Secondary Wing */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACADEMIC_STREAMS.map((st) => (
              <div
                key={st.code}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#008744] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                      Stream Code: {st.code}
                    </span>
                    <span className="text-xs font-bold text-slate-700 font-mono">
                      {st.seats} Seats
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {st.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>

                  <div className="pt-2 border-t border-slate-200 space-y-1.5 text-xs">
                    <div>
                      <strong className="text-slate-800">Core Subjects:</strong>{" "}
                      <span className="text-slate-600">{st.coreSubjects.join(", ")}</span>
                    </div>
                    <div>
                      <strong className="text-slate-800">Second Languages:</strong>{" "}
                      <span className="text-slate-600">{st.languages.join(", ")}</span>
                    </div>
                    <div>
                      <strong className="text-slate-800">Laboratories:</strong>{" "}
                      <span className="text-slate-600">{st.labs.join(", ")}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:underline"
                  >
                    <span>Admission Requirements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Academic Subpages Navigation Cards */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Related Academic Sections
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Academic Resources & Details
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicSubpages.map((sub, idx) => {
              const IconComp = sub.icon;
              return (
                <Link
                  key={idx}
                  href={sub.href}
                  className="group bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                        {sub.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-[#008744] group-hover:underline">
                    <span>View Section</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
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
