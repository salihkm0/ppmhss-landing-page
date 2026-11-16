"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  Layers,
  FileCheck,
  CheckCircle2,
  FolderOpen,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { RESOURCES_LIST } from "@/data/schoolData";

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedGrade, setSelectedGrade] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Question Paper",
    "Question Bank",
    "Holiday Worksheet",
    "Circular & GO",
    "Time Table",
    "Form",
  ];

  const grades = [
    "All",
    "SSLC (Class 10)",
    "Plus Two (+2)",
    "Plus One (+1)",
    "Class 9",
    "Class 8",
    "General",
  ];

  const filteredResources = RESOURCES_LIST.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesGrade =
      selectedGrade === "All" || item.grade === selectedGrade;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.subject && item.subject.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesGrade && matchesSearch;
  });

  return (
    <section id="resources" className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Digital Repository</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Academic Resources & <span className="text-[#008744]">Downloads</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Official repository of model question papers, subject-wise question banks, vacation worksheets,
            examination timetables, administrative application forms, and government orders for students, parents, and faculty.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by subject, title, or exam (e.g. Physics, SSLC Model, Scheme of Work)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#008744] focus:bg-white text-slate-800 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-[#008744]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-[#008744]" />
              <span>Resource Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-emerald-50/60 hover:text-[#008744]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grade / Level Pills */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              <span>Grade Level:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {grades.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                    selectedGrade === g
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 px-2">
            <span>
              Showing <span className="text-slate-900 font-bold">{filteredResources.length}</span> resources matching selection
            </span>
            <span>PDF format • Kerala State Syllabus</span>
          </div>

          {filteredResources.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-slate-300">
              <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No resources found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try clearing your search terms or picking &apos;All&apos; categories.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSelectedGrade("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Top Row: Category Pill & Size */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-50/60 text-[#008744] text-[11px] font-bold border border-emerald-200/60">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md">
                        {item.fileSize}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 pt-1">
                      <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                        {item.grade}
                      </span>
                      {item.subject && (
                        <span className="text-slate-600 font-medium">
                          {item.subject}
                        </span>
                      )}
                      {item.year && (
                        <span className="text-slate-400 text-[11px]">
                          • {item.year}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Added: {item.dateAdded}</span>
                    </span>

                    <a
                      href={item.downloadUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading: "${item.title}" (${item.fileSize}) from PPM HSS secure academic archive.`);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold shadow-md shadow-emerald-900/20 hover:shadow-emerald-900/20 transition-all transform hover:-translate-y-0.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Academic Notice Banner */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#008744]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Faculty Resource Contribution</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Looking for archival question papers or study material?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Faculty members may submit approved lesson notes, question banks, or curriculum updates through the internal Samagra portal or directly to the Academic Committee.
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 px-6 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-emerald-900/20 transition-all"
            >
              Contact Academic Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
