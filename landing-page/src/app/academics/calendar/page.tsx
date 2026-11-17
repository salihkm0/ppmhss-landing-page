import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Calendar, Clock, Download, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Calendar & Examination Schedule | PPM HSS Kottukkara",
  description:
    "Official academic year schedule, term examination timetables, and vacation circulars for PPM HSS Kottukkara.",
};

export default function AcademicCalendarPage() {
  const academicTerms = [
    {
      term: "First Term (June – August)",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      badge: "Term 1",
      events: [
        { date: "June 03, 2024", title: "School Reopening & Pravesanotsavam" },
        { date: "June 19, 2024", title: "Vayana Dinam (Reading Day Observance)" },
        { date: "August 15, 2024", title: "Independence Day Celebrations" },
        { date: "August 20 – 30, 2024", title: "First Terminal Examinations (Classes 8–12)" },
      ],
    },
    {
      term: "Second Term (September – December)",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
      badge: "Term 2",
      events: [
        { date: "September 13 – 22, 2024", title: "Onam Holidays" },
        { date: "October 02, 2024", title: "Gandhi Jayanti & Campus Cleanliness Drive" },
        { date: "November 14, 2024", title: "Children's Day & School Kalolsavam" },
        { date: "December 12 – 20, 2024", title: "Second Terminal Examinations" },
        { date: "December 23 – Jan 01", title: "Christmas Vacation" },
      ],
    },
    {
      term: "Third Term (January – March)",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      badge: "Term 3",
      events: [
        { date: "January 26, 2025", title: "Republic Day Parade & Flag Hoisting" },
        { date: "February 15 – 28, 2025", title: "SSLC & Plus Two Model Examinations" },
        { date: "March 03 – 26, 2025", title: "SSLC & Plus Two Board Examinations (Kerala DHSE & KBPE)" },
        { date: "March 20 – 28, 2025", title: "Annual Examinations for Classes 8, 9 & 11" },
        { date: "March 31, 2025", title: "Academic Year Conclusion & Summer Vacation Commences" },
      ],
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="ACADEMIC TIMELINE"
        title="Calendar &"
        highlightWord="Examinations"
        description="Term dates, board examination schedules, and holidays for the current academic year."
        breadcrumbLabel="Academic Calendar"
        backgroundImage="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Working Days", value: "200+" },
          { label: "Terms", value: "3 Terms" },
          { label: "Board Code", value: "11024" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Academic Year 2024–25
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Term-Wise Schedule
              </h2>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Examination Timetable</span>
            </Link>
          </div>

          {/* Terms Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {academicTerms.map((t, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={t.image}
                    alt={t.term}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                    {t.badge}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-base font-bold drop-shadow-sm">{t.term}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Key Observances & Exam Dates:
                    </div>
                    <div className="space-y-2.5">
                      {t.events.map((evt, i) => (
                        <div key={i} className="text-xs space-y-0.5 border-l-2 border-emerald-300 pl-3">
                          <span className="font-mono font-semibold text-[#008744] text-[11px] block">
                            {evt.date}
                          </span>
                          <span className="text-slate-700 font-medium leading-relaxed block">
                            {evt.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>KBPE / DHSE Norms</span>
                    <span className="font-bold text-emerald-700">Official</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subpage Navigation */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008744] transition-colors"
            >
              <span>← Academic Programs</span>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>Academic Question Papers & Timetables →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
