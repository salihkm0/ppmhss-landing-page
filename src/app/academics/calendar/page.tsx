import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Calendar, Clock, Download, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Academic Calendar & Examination Schedule | PPM HSS Kottukkara",
  description:
    "Official academic year schedule, term examination timetables, and vacation circulars for PPM HSS Kottukkara.",
};

export default function AcademicCalendarPage() {
  const academicTerms = [
    {
      term: "First Term (June – August)",
      events: [
        { date: "June 03, 2024", title: "School Reopening & Pravesanotsavam" },
        { date: "June 19, 2024", title: "Vayana Dinam (Reading Day Observance)" },
        { date: "August 15, 2024", title: "Independence Day Celebrations" },
        { date: "August 20 – 30, 2024", title: "First Terminal Examinations (Classes 8–12)" },
      ],
    },
    {
      term: "Second Term (September – December)",
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

      <div className="py-14 sm:py-16 bg-white">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-[#008744] hover:bg-[#008744] hover:text-white text-xs font-bold transition-all border border-emerald-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Examination Timetable</span>
            </Link>
          </div>

          {/* Terms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicTerms.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Term 0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {t.term}
                  </h3>

                  <div className="space-y-2.5 pt-2 border-t border-slate-200">
                    {t.events.map((evt, i) => (
                      <div key={i} className="text-xs space-y-0.5">
                        <div className="font-semibold text-emerald-800">{evt.date}</div>
                        <div className="text-slate-600">{evt.title}</div>
                      </div>
                    ))}
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
              href="/academics/scholarships"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>Scholarships & Aid →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

