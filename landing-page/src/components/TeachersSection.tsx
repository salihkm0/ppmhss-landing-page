"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Users,
  GraduationCap,
  Award,
  Mail,
  Phone,
  Clock,
  Sparkles,
  Share2,
  X,
  ExternalLink,
  ChevronRight,
  Filter,
} from "lucide-react";
import { STAFF_LIST, StaffMember } from "@/data/schoolData";

export default function TeachersSection() {
  const [activeWing, setActiveWing] = useState<"All" | "Higher Secondary" | "High School">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<StaffMember | null>(null);

  // Filter teachers by wing and search query
  const filteredTeachers = STAFF_LIST.filter((teacher) => {
    const matchesWing = activeWing === "All" || teacher.wing === activeWing;
    const matchesQuery =
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (teacher.specialization && teacher.specialization.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesWing && matchesQuery;
  });

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* ========================================================
            1. SECTION HEADER (Matching Eduka Reference Image 1)
        ======================================================== */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Our Teachers</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Meet With Our <span className="text-[#008744]">Teachers</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Over 165 certified educators across High School and Higher Secondary wings at PPM HSS Kottukkara.
          </p>
        </div>

        {/* ========================================================
            2. FILTER TABS & SEARCH BAR
        ======================================================== */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Wing Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "All", label: "All Faculty Members" },
              { id: "Higher Secondary", label: "Higher Secondary (HSST)" },
              { id: "High School", label: "High School (HST)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveWing(tab.id as typeof activeWing)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeWing === tab.id
                    ? "bg-[#008744] text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50/60 hover:text-[#008744]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search teacher by name or subject..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs focus:ring-2 focus:ring-[#008744] focus:outline-none text-slate-800"
            />
          </div>
        </div>

        {/* ========================================================
            3. TEACHERS GRID (Matching Eduka 4-Column Arched Cards)
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredTeachers.map((teacher, idx) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Arched Photo Frame (Exact Eduka Styling: Rounded Top 32px, Rounded Bottom 12px) */}
                <div className="relative h-72 sm:h-80 w-full rounded-t-[32px] rounded-b-xl overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src={teacher.photoUrl}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Social Icons Overlay (Visible on Hover - matching Eduka 3rd card in reference) */}
                  <div className="absolute top-4 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button
                      onClick={() => alert(`Connecting with ${teacher.name} on LinkedIn`)}
                      className="w-7 h-7 rounded-full bg-amber-500 hover:bg-[#008744] text-white flex items-center justify-center text-[10px] shadow-md transition-colors"
                      title="LinkedIn"
                    >
                      in
                    </button>
                    <button
                      onClick={() => alert(`Emailing ${teacher.name}: ${teacher.email || 'office@ppmhsskottukkara.edu.in'}`)}
                      className="w-7 h-7 rounded-full bg-amber-500 hover:bg-[#008744] text-white flex items-center justify-center text-[10px] shadow-md transition-colors"
                      title="Email Faculty"
                    >
                      @
                    </button>
                    <button
                      onClick={() => setSelectedTeacher(teacher)}
                      className="w-7 h-7 rounded-full bg-amber-500 hover:bg-[#008744] text-white flex items-center justify-center text-[10px] shadow-md transition-colors"
                      title="View Bio"
                    >
                      +
                    </button>
                  </div>

                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Experience Badge Top Left */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 font-bold text-[10px] shadow-xs">
                    {teacher.experience}
                  </span>
                </div>

                {/* Teacher Details */}
                <div className="pt-4 pb-2 px-1 space-y-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                    {teacher.name}
                  </h3>
                  <div className="text-xs font-bold text-[#008744] uppercase tracking-wider">
                    {teacher.designation}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {teacher.qualification}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer: Department & Circular Share/Profile Button */}
              <div className="pt-3 px-1 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
                  {teacher.department}
                </span>

                {/* Circular Share / Action Button (Eduka Signature Button) */}
                <button
                  onClick={() => setSelectedTeacher(teacher)}
                  className="w-9 h-9 rounded-full bg-[#008744] hover:bg-[#007038] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-105 cursor-pointer"
                  title="View Profile Details"
                  aria-label={`View ${teacher.name} profile`}
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
            <Users className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">No teachers found</h4>
            <p className="text-xs text-slate-500">
              No faculty member matched your query &ldquo;{searchQuery}&rdquo;. Try another name or clear your filters.
            </p>
            <button
              onClick={() => {
                setActiveWing("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-full bg-[#008744] text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================
            4. FACULTY STATISTICAL HIGHLIGHTS (4 Pillars)
        ======================================================== */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#008744] font-mono">165+</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Certified Faculty</div>
              <p className="text-[11px] text-slate-500">Across high school & higher secondary wings</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#008744] font-mono">100%</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">State Qualified</div>
              <p className="text-[11px] text-slate-500">B.Ed., SET, NET, M.Phil. & Ph.D. holders</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#008744] font-mono">18+ Yrs</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Average Experience</div>
              <p className="text-[11px] text-slate-500">Extensive board exam valuation expertise</p>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#008744] font-mono">1:28</div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Mentorship Ratio</div>
              <p className="text-[11px] text-slate-500">Individual academic progress monitoring</p>
            </div>
          </div>
        </div>

        {/* ========================================================
            5. CAREERS / JOIN OUR FACULTY CALLOUT
        ======================================================== */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider">
              Careers at PPM HSS
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight">
              Are You Passionate About Shaping Young Minds?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We periodically invite qualified post-graduate educators for guest faculty and coaching assignments in Science, Commerce, and Languages.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all shrink-0"
          >
            Contact Administration
          </Link>
        </div>
      </div>

      {/* ========================================================
          6. TEACHER DETAIL MODAL (Opens on Card Click)
      ======================================================== */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTeacher(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Photo and Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pt-2">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-[#008744] shrink-0">
                <img
                  src={selectedTeacher.photoUrl}
                  alt={selectedTeacher.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-sm">
                  {selectedTeacher.wing} Wing
                </span>
                <h3 className="text-xl font-black text-slate-900">{selectedTeacher.name}</h3>
                <p className="text-xs font-bold text-emerald-700">{selectedTeacher.designation}</p>
                <p className="text-xs text-slate-500">{selectedTeacher.qualification}</p>
              </div>
            </div>

            {/* Specialization & Experience */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1">
                <span className="text-slate-500 font-semibold text-[11px]">Specialization</span>
                <div className="font-bold text-slate-900">{selectedTeacher.specialization || selectedTeacher.department}</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 space-y-1">
                <span className="text-slate-500 font-semibold text-[11px]">Experience</span>
                <div className="font-bold text-slate-900">{selectedTeacher.experience} in State Education</div>
              </div>
            </div>

            {/* Quote / Philosophy */}
            {selectedTeacher.quote && (
              <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 text-xs text-slate-700 italic space-y-1">
                <div className="font-bold not-italic text-[#008744] text-[11px] uppercase tracking-wider">
                  Educational Philosophy
                </div>
                <p>&ldquo;{selectedTeacher.quote}&rdquo;</p>
              </div>
            )}

            {/* Contact Details */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#008744]" />
                <span className="font-medium">Direct Email:</span>
                <a href={`mailto:${selectedTeacher.email}`} className="font-bold text-slate-900 hover:text-[#008744] underline">
                  {selectedTeacher.email || "office@ppmhsskottukkara.edu.in"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#008744]" />
                <span className="font-medium">Student Consultation:</span>
                <span className="font-semibold text-slate-800">3:30 PM - 4:15 PM on Working Days</span>
              </div>
            </div>

            {/* Footer Action */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedTeacher(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#008744] transition-colors"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

