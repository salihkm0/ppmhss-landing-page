"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  FileText,
  Award,
  Download,
  Users,
  FlaskConical,
  Laptop,
  CheckCircle2,
  Clock,
  ArrowRight,
  Star,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Quote,
} from "lucide-react";
import {
  STAFF_LIST,
  ACADEMIC_STREAMS,
  SCHOLARSHIPS_LIST,
} from "@/data/schoolData";

export default function AcademicsSection() {
  const [activeTab, setActiveTab] = useState<
    "highschool" | "highersecondary" | "calendar" | "curriculum" | "scholarships"
  >("highschool");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "highschool" ||
        hash === "highersecondary" ||
        hash === "calendar" ||
        hash === "curriculum" ||
        hash === "scholarships"
      ) {
        setActiveTab(hash as typeof activeTab);
      }
    }
  }, []);

  const highSchoolStaff = STAFF_LIST.filter((s) => s.wing === "High School");
  const higherSecStaff = STAFF_LIST.filter(
    (s) => s.wing === "Higher Secondary"
  );

  const academicCalendarKeyDates = [
    {
      date: "June 02, 2024",
      event: "School Reopening & Praveshanolsavam (Term 1 Begins)",
      type: "Term",
    },
    {
      date: "August 15, 2024",
      event: "Independence Day Celebrations & Special Assembly",
      type: "Observance",
    },
    {
      date: "September 12 - 22, 2024",
      event: "First Terminal Examinations (Onam Exams)",
      type: "Exam",
    },
    {
      date: "September 23 - October 02, 2024",
      event: "Onam Vacations (School Reopens Oct 03)",
      type: "Holiday",
    },
    {
      date: "November 01, 2024",
      event: "Kerala Piravi Celebrations & Sahitya Utsav",
      type: "Event",
    },
    {
      date: "December 14 - 22, 2024",
      event: "Second Terminal Examinations (Christmas Exams)",
      type: "Exam",
    },
    {
      date: "December 23 - January 01, 2025",
      event: "Christmas Vacations",
      type: "Holiday",
    },
    {
      date: "January 20 - 28, 2025",
      event: "Annual Sports Meet & Sub-District Kalolsavam Preparations",
      type: "Event",
    },
    {
      date: "February 20 - 28, 2025",
      event: "SSLC & Plus Two Board Model Examinations",
      type: "Exam",
    },
    {
      date: "March 03 - 26, 2025",
      event: "Kerala SSLC & Higher Secondary Annual Board Exams",
      type: "Public Exam",
    },
    {
      date: "March 31, 2025",
      event: "Academic Year Conclusion & Summer Vacation Starts",
      type: "Term",
    },
  ];

  return (
    <section id="academics" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* ========================================================
            1. HERO SECTION WITH EDUKA-STYLE 3-IMAGE COLLAGE
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-8 border-b border-slate-200">
          {/* Left: 3-Image Collage with Arched & Circular Frames */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Tall Arched Main Image (Science Lab) */}
              <div className="relative group">
                <div className="h-[360px] sm:h-[420px] w-full rounded-t-[120px] rounded-b-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
                    alt="Senior Science Laboratory at PPM HSS"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                      Experiential Learning
                    </span>
                    <h5 className="text-xs font-bold text-white drop-shadow-sm">
                      State-of-the-Art Science & Tech Labs
                    </h5>
                  </div>
                </div>
              </div>

              {/* Right Column: 2 Images (Circular & Rounded) */}
              <div className="space-y-4">
                {/* Top Circular Image (Smart ICT Classroom) */}
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg border-4 border-white group relative">
                  <img
                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop"
                    alt="Smart Digital Classroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Bottom Rounded Image (Central Library Hall) */}
                <div className="h-44 sm:h-48 w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white group relative">
                  <img
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
                    alt="Central Reference Library"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] font-bold text-emerald-300 uppercase">
                      Resource Hub
                    </span>
                    <p className="text-xs font-bold leading-tight">
                      15,000+ Volume Library
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-4 left-2 sm:left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5 z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-black text-lg">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-black text-slate-900 leading-none">
                  194 Full A+
                </div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">
                  In Kerala SSLC Examination 2024
                </div>
              </div>
            </div>
          </div>

          {/* Right: Rich Narrative & Feature Callouts */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Curriculum & Excellence</span>
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Academic Programs &{" "}
                <span className="text-[#008744]">Specialized Streams</span>
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Kerala State curriculum (SCERT & DHSE) spanning Standards 8 to 12 with smart classrooms, laboratories, and experienced faculty.
              </p>
            </div>

            {/* 2 Feature Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  High School (Std 8 - 10)
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Both Malayalam & English medium divisions preparing students
                  for top-ranking SSLC board exam performance.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  Higher Secondary (+1 & +2)
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Four approved streams: Bio-Science, Computer Science, Commerce,
                  and Humanities with specialized laboratory training.
                </p>
              </div>
            </div>

            {/* Quote / Highlight Card */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 relative">
              <Quote className="w-7 h-7 text-[#008744]/20 absolute top-3 right-4 pointer-events-none" />
              <p className="text-xs italic text-slate-700 leading-relaxed">
                &ldquo;Rigorous scholarship blended with ethical character: our faculty ensures every student masters fundamentals and excels in board examinations.&rdquo;
              </p>
              <div className="text-[10px] font-bold text-[#008744] mt-2 uppercase tracking-wider">
                — Academic Council
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. SECTION SUB NAVIGATION PILL TABS
        ======================================================== */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Academic Directory
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Curriculum, Streams & Faculty
              </h3>
            </div>

            {/* Sub Navigation Pill Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "highschool", label: "High School (Std 8-10)" },
                { id: "highersecondary", label: "Higher Secondary (+1 & +2)" },
                { id: "calendar", label: "Academic Calendar" },
                { id: "curriculum", label: "Curriculum & Syllabus" },
                { id: "scholarships", label: "Scholarships" },
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

        {/* ========================================================
            3. TAB 3.1: HIGH SCHOOL (STD 8 - 10)
        ======================================================== */}
        {activeTab === "highschool" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900">
                High School Academic Infrastructure & Facilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-4xl">
                The High School wing encompasses Standards 8, 9, and 10 with
                dedicated Malayalam and English medium divisions. Focus is
                placed on building strong foundations in mathematics, physical
                sciences, social sciences, and languages, preparing students
                for exemplary performance in the Kerala SSLC Board Examination.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">
                    Hi-Tech Classrooms & ICT
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Interactive smart boards, Linux-powered IT workstations, and
                    high-speed broadband in partnership with KITE Kerala.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">
                    General Science Labs
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Separate experimental benches for Physics, Chemistry, and
                    Natural Science with precision apparatus and models.
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">
                    High School Library Wing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Over 5,000 age-appropriate volumes, reference books, student
                    periodicals, and designated weekly reading periods.
                  </p>
                </div>
              </div>
            </div>

            {/* High School Teaching Faculty Cards (Eduka Style Grid) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Faculty Showcase
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-0.5">
                    High School Teaching Staff (HST)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Subject specialists, department heads, and senior mentors
                    guiding Standards 8, 9, and 10.
                  </p>
                </div>
                <Link
                  href="/teachers"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 hover:bg-[#008744] text-[#008744] hover:text-white border border-emerald-200 text-xs font-bold transition-all shrink-0"
                >
                  <span>View All 165+ Faculty</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4-Column Arched Teacher Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {highSchoolStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-3xl p-3.5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    {/* Arched Top Photo */}
                    <div className="relative w-full aspect-[4/5] rounded-t-[36px] rounded-b-2xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img
                        src={
                          staff.photoUrl ||
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                        }
                        alt={staff.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#008744] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        {staff.department}
                      </div>
                    </div>

                    {/* Teacher Details */}
                    <div className="pt-3 pb-1 px-1 space-y-1.5">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-tight">
                        {staff.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-[#008744]">
                        {staff.designation}
                      </p>
                      <div className="text-[10px] text-slate-500 pt-1.5 space-y-0.5 border-t border-slate-100">
                        <div>
                          <strong>Qualification:</strong> {staff.qualification}
                        </div>
                        <div>
                          <strong>Experience:</strong> {staff.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            4. TAB 3.2: HIGHER SECONDARY (+1 & +2)
        ======================================================== */}
        {activeTab === "highersecondary" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Stream Showcase Cards */}
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                  Directorate of Higher Secondary Education (DHSE)
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Higher Secondary Streams & Specialized Combinations
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ACADEMIC_STREAMS.map((stream) => (
                  <div
                    key={stream.code}
                    className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#008744] font-bold font-mono text-xs">
                        Stream Code: {stream.code}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Intake: {stream.seats} Seats
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {stream.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {stream.description}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div>
                        <strong>Core Subjects:</strong>{" "}
                        {stream.coreSubjects.join(", ")}
                      </div>
                      <div>
                        <strong>Languages:</strong>{" "}
                        {stream.languages.join(", ")}
                      </div>
                      <div>
                        <strong>Laboratories:</strong>{" "}
                        {stream.labs.join(", ")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Higher Secondary Teaching Faculty Cards (Eduka Style Grid) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Post-Graduate Educators
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-0.5">
                    Higher Secondary Teaching Faculty (HSST)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Post-graduate teachers with SET/NET certifications guiding
                    Plus One and Plus Two streams.
                  </p>
                </div>
                <Link
                  href="/teachers"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 hover:bg-[#008744] text-[#008744] hover:text-white border border-emerald-200 text-xs font-bold transition-all shrink-0"
                >
                  <span>View Full Faculty Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 4-Column Arched Teacher Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {higherSecStaff.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-3xl p-3.5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    {/* Arched Top Photo */}
                    <div className="relative w-full aspect-[4/5] rounded-t-[36px] rounded-b-2xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img
                        src={
                          staff.photoUrl ||
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
                        }
                        alt={staff.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#008744] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                        {staff.department}
                      </div>
                    </div>

                    {/* Teacher Details */}
                    <div className="pt-3 pb-1 px-1 space-y-1.5">
                      <h4 className="text-sm font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-tight">
                        {staff.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-[#008744]">
                        {staff.designation}
                      </p>
                      <div className="text-[10px] text-slate-500 pt-1.5 space-y-0.5 border-t border-slate-100">
                        <div>
                          <strong>Qualification:</strong> {staff.qualification}
                        </div>
                        <div>
                          <strong>Experience:</strong> {staff.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            5. TAB 3.3: ACADEMIC CALENDAR
        ======================================================== */}
        {activeTab === "calendar" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Official Academic Calendar (2024-25)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Term schedules, examination dates, vacations, and PTA meeting
                  intervals.
                </p>
              </div>
              <button
                onClick={() =>
                  alert(
                    "Downloading official PPM HSS Academic Calendar 2024-25 (PDF)"
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#008744] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#007038] transition-colors shrink-0 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Calendar PDF (1.4 MB)</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {academicCalendarKeyDates.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between hover:border-emerald-300 transition-colors shadow-xs"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#008744] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-sm">
                      {item.type}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {item.event}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600 shrink-0 pl-3">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            6. TAB 3.4: CURRICULUM & SYLLABUS
        ======================================================== */}
        {activeTab === "curriculum" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                SCERT & NCERT Syllabus Guidelines
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PPM HSS follows the state curriculum designed by the State
                Council of Educational Research and Training (SCERT), Kerala for
                Standards 8 through 10, and NCERT-aligned Higher Secondary
                curriculum under DHSE.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    title: "SSLC Scheme of Work",
                    desc: "Term-wise unit planning & practical continuous evaluation guidelines.",
                  },
                  {
                    title: "Plus Two NCERT Textbook Guide",
                    desc: "Prescribed texts for Physics, Chemistry, Biology, Mathematics & Accountancy.",
                  },
                  {
                    title: "KITE IT & Linux Syllabus",
                    desc: "Free software tools, Python programming, and GIMP multimedia syllabus.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1"
                  >
                    <h4 className="text-xs font-bold text-[#008744]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            7. TAB 3.5: SCHOLARSHIPS
        ======================================================== */}
        {activeTab === "scholarships" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Financial Support
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Government & Endowed Scholarships
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCHOLARSHIPS_LIST.map((sch, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl p-6 space-y-3 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-[#008744] text-[10px] font-bold uppercase tracking-wider">
                      {sch.target}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {sch.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sch.eligibility}
                    </p>
                    <div className="text-[11px] text-slate-500">
                      <strong>Provider:</strong> {sch.provider}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Amount / Benefit:</span>
                    <strong className="text-[#008744] font-mono text-[11px] text-right max-w-[55%]">
                      {sch.amount}
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}