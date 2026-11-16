"use client";

import React, { useState } from "react";
import {
  Bell,
  Calendar,
  AlertCircle,
  FileText,
  Clock,
  ArrowRight,
  Download,
  Archive,
  ChevronRight,
  Search,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { NEWS_EVENTS, NOTICES_LIST } from "@/data/schoolData";

export default function NewsEventsSection() {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "announcements" | "noticeboard">("news");
  const [showArchivedNotices, setShowArchivedNotices] = useState(false);
  const [noticeSearch, setNoticeSearch] = useState("");
  const [selectedNews, setSelectedNews] = useState<(typeof NEWS_EVENTS)[0] | null>(null);

  const activeNotices = NOTICES_LIST.filter((n) =>
    showArchivedNotices ? n.archived : !n.archived
  ).filter((n) => n.title.toLowerCase().includes(noticeSearch.toLowerCase()));

  const upcomingEvents = [
    {
      title: "Plus One Centralised Allotment Guidance & Career Seminar",
      date: "May 18, 2025",
      month: "MAY",
      day: "18",
      time: "10:00 AM - 1:00 PM",
      venue: "School Main Auditorium",
      category: "Admissions & Counseling",
      desc: "Comprehensive counseling session for SSLC passed students and parents regarding stream selections, higher education options, and competitive entrance coaching.",
    },
    {
      title: "Annual Merit Day & SSLC Full A+ Scholar Felicitations 2025",
      date: "July 05, 2025",
      month: "JUL",
      day: "05",
      time: "9:30 AM - 1:30 PM",
      venue: "PPM HSS Diamond Jubilee Hall",
      category: "Academic Honours",
      desc: "Felicitating 194 SSLC Full A+ achievers, Plus Two district rank holders, and State Kalolsavam winners with cash endowments and certificates of merit.",
    },
    {
      title: "Inter-School Science Fair & Innovation Expo 'Sasthra'",
      date: "August 12, 2025",
      month: "AUG",
      day: "12",
      time: "9:00 AM - 4:00 PM",
      venue: "Senior Science Wing Labs",
      category: "Science & Tech",
      desc: "Exhibition of working robotics models, renewable energy prototypes, and applied mathematics demonstrations open to high schools across Malappuram.",
    },
    {
      title: "PPM HSS Golden Jubilee Founder's Memorial Lecture",
      date: "September 20, 2025",
      month: "SEP",
      day: "20",
      time: "2:00 PM - 5:00 PM",
      venue: "Auditorium Annex",
      category: "Institutional",
      desc: "Commemorative address honoring the visionary founders of Nediyiruppu MEA and key stakeholders who built the institution over five decades.",
    },
  ];

  return (
    <section id="news-events" className="py-12 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Bell className="w-3.5 h-3.5" />
            <span>Campus Dispatch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            News, Events & <span className="text-[#008744]">Noticeboard</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Real-time campus communications, official circulars from the Directorate of General Education,
            examination notifications, and upcoming academic celebrations.
          </p>

          {/* Sub Navigation Pill Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: "news", label: "7.1 Campus News & Stories" },
              { id: "events", label: "7.2 Events Calendar" },
              { id: "announcements", label: "7.3 Urgent Alerts" },
              { id: "noticeboard", label: "7.4 Official Noticeboard" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#008744] text-white shadow-md shadow-emerald-900/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50/60 hover:text-[#008744]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: News */}
        {activeTab === "news" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_EVENTS.map((item, idx) => {
                const newsThumbnails = [
                  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
                ];
                const thumbUrl = newsThumbnails[idx % newsThumbnails.length];

                return (
                  <article
                    key={item.id}
                    className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={thumbUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#008744] text-white text-[11px] font-bold shadow-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#008744]" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                          {item.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedNews(item)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:text-emerald-800 cursor-pointer"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Read Story Modal */}
            {selectedNews && (
              <div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
                onClick={() => setSelectedNews(null)}
              >
                <div
                  className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold">
                      {selectedNews.category}
                    </span>
                    <span>{selectedNews.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedNews.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {selectedNews.content || selectedNews.summary}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Published by: {selectedNews.author}</span>
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                    >
                      Close Story
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Events */}
        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((evt, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Left Date Block */}
                  <div className="shrink-0 w-20 h-20 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center text-center shadow-md">
                    <span className="text-[11px] font-bold tracking-widest text-emerald-400">
                      {evt.month}
                    </span>
                    <span className="text-2xl font-black">{evt.day}</span>
                  </div>

                  {/* Right Details */}
                  <div className="flex-1 space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50/60 text-[#008744] text-[11px] font-bold">
                      {evt.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {evt.desc}
                    </p>

                    <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#008744]" />
                        <span>{evt.time}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0b5446]" />
                        <span>{evt.venue}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Announcements */}
        {activeTab === "announcements" && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  title: "Admissions Open for Plus One Higher Secondary (2025-26 Session)",
                  date: "March 01, 2025",
                  level: "Urgent Priority",
                  desc: "Applications invited for Science (Biology & Computer), Commerce, and Humanities. Candidates must register on HSCAP Kerala and submit community/management quota preferences to school office.",
                },
                {
                  title: "Second Terminal Model Practical Examination Schedule Published",
                  date: "February 10, 2025",
                  level: "Academic Notice",
                  desc: "Senior secondary practical laboratory examinations for Physics, Chemistry, Biology, and Computer Applications scheduled from Feb 15 to Feb 24. Attendance mandatory.",
                },
                {
                  title: "Parent-Teacher General Body Meeting regarding Board Exam Readiness",
                  date: "January 28, 2025",
                  level: "PTA Notice",
                  desc: "All parents of Class 10 and Plus Two students requested to attend the orientation session with Principal and academic counsellors.",
                },
              ].map((ann, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl border-l-4 border-l-[#008744] border-y border-r border-slate-200/90 p-6 shadow-sm hover:shadow-lg transition-all space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                      {ann.level}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{ann.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {ann.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ann.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Noticeboard */}
        {activeTab === "noticeboard" && (
          <div className="space-y-6">
            {/* Search & Archived Toggle */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter official notices..."
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#008744]"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowArchivedNotices(!showArchivedNotices)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    showArchivedNotices
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Archive className="w-3.5 h-3.5" />
                  <span>{showArchivedNotices ? "Showing Archives" : "Show Archived Notices"}</span>
                </button>
              </div>
            </div>

            {/* Notice List */}
            <div className="space-y-3">
              {activeNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-[#008744] bg-emerald-50/60 px-2.5 py-0.5 rounded-full">
                        {notice.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {notice.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {notice.title}
                    </h4>
                  </div>

                  <a
                    href={notice.fileUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading official notice: "${notice.title}"`);
                    }}
                    className="shrink-0 px-4 py-2 rounded-full bg-emerald-50/60 hover:bg-[#008744] text-[#008744] hover:text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Order</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
