import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { CLUBS_DATA } from "@/data/schoolData";
import { Users, CheckCircle2, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Clubs & Co-Curricular Activities | PPM HSS Kottukkara",
  description:
    "Explore student clubs at PPM HSS Kottukkara including NSS, NCC, Bharat Scouts & Guides, Eco Club, STEM, and Literary forums.",
};

export default function ClubsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="STUDENT ORGANIZATIONS"
        title="Clubs &"
        highlightWord="Activities"
        description="Nurturing leadership, environmental stewardship, arts, and community service."
        breadcrumbLabel="Clubs & Activities"
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Active Clubs", value: "7 Major Units" },
          { label: "Cadets & Volunteers", value: "800+" },
          { label: "Community Outreach", value: "Year-Round" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Co-Curricular Organizations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Active Student Clubs & Forums
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Every student is encouraged to participate in at least one co-curricular wing to build teamwork, civic responsibility, and creative skills.
            </p>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLUBS_DATA.map((club, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {club.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {club.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {club.description}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-200">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Activities:
                    </div>
                    {club.activities.map((act, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500">
                  Coordinator: <strong className="text-slate-800">{club.coordinator}</strong>
                </div>
              </div>
            ))}
          </div>

          {/* Subpage Navigation */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008744] transition-colors"
            >
              <span>← Campus Facilities</span>
            </Link>
            <Link
              href="/campus-life/achievements"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>Achievements & Honors →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

