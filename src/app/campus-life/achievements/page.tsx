import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ACHIEVEMENTS_LIST } from "@/data/schoolData";
import { Trophy, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hall of Achievements | PPM HSS Kottukkara",
  description:
    "Explore the academic, arts, sports, and institutional awards earned by students of PPM HSS Kottukkara.",
};

export default function AchievementsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="EXCELLENCE & RECOGNITION"
        title="Hall of"
        highlightWord="Achievements"
        description="Celebrating outstanding records in board examinations, arts, athletics, and green campus honors."
        breadcrumbLabel="Achievements"
        backgroundImage="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "SSLC 2024", value: "194 Full A+" },
          { label: "State 1st Rank", value: "1200/1200" },
          { label: "Kalolsavam", value: "A Grade" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Accolades & Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Recent Milestones & Triumphs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A tradition of excellence spanning classroom examinations, state arts festivals, and district sports competitions.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS_LIST.map((ach) => (
              <div
                key={ach.id}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {ach.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-500">
                      Year: {ach.year}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#008744]" />
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                    {ach.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Subpage Navigation */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/campus-life/clubs"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008744] transition-colors"
            >
              <span>← Clubs & Activities</span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>View Photo Gallery →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

