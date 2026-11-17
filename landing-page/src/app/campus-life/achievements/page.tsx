import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ACHIEVEMENTS_LIST } from "@/data/schoolData";
import { Trophy, Award, Sparkles, ArrowRight, Medal } from "lucide-react";

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

      <div className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Accolades & Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Recent Milestones & Triumphs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              A tradition of excellence spanning classroom examinations, state arts festivals, science exhibitions, and district athletic championships.
            </p>
          </div>

          {/* Achievements Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {ACHIEVEMENTS_LIST.map((ach) => (
              <div
                key={ach.id}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner with Category & Year Overlay */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={ach.imageUrl}
                    alt={ach.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                      {ach.category}
                    </span>
                  </div>

                  {/* Year Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block text-[11px] font-mono font-bold text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      {ach.year}
                    </span>
                  </div>

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-400/30">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>State / District Honor</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {ach.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  {/* Honor Badge Ribbon Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 rounded-2xl px-3.5 py-2 max-w-full">
                      <Award className="w-4 h-4 text-[#008744] shrink-0" />
                      <span className="text-xs font-bold text-emerald-900 truncate">
                        {ach.badge}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0">
                      Recognized
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Pride Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#008744]">
                Celebrating Excellence
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                PPM HSS continues to set academic benchmarks in Malappuram
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl">
                Every achievement reflects the collaborative effort between dedicated faculty mentors, parents, and diligent students in high school and higher secondary sections.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] shadow-sm transition-colors shrink-0"
            >
              <span>Explore Photo Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
