import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { CLUBS_DATA } from "@/data/schoolData";
import { CheckCircle2, User, ArrowRight, ShieldCheck } from "lucide-react";

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
        description="Nurturing leadership, environmental stewardship, arts, and community service across our student body."
        breadcrumbLabel="Clubs & Activities"
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Active Clubs", value: "7 Major Units" },
          { label: "Cadets & Volunteers", value: "800+" },
          { label: "Community Outreach", value: "Year-Round" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Co-Curricular Organizations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Active Student Clubs & Forums
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every student is encouraged to participate in at least one co-curricular wing to build leadership, discipline, civic responsibility, and creative expression.
            </p>
          </div>

          {/* Clubs Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CLUBS_DATA.map((club, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner with Category Badge */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={club.imageUrl}
                    alt={club.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                      {club.category}
                    </span>
                  </div>

                  {/* Verified Wing indicator */}
                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Official Wing</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-3">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {club.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {club.description}
                    </p>

                    {/* Key Initiatives List */}
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2 mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                        Key Initiatives & Programs
                      </span>
                      <div className="space-y-1.5">
                        {club.activities.map((act, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: Coordinator & Status */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[11px]">Staff Lead:</span>
                      <strong className="text-slate-800 font-semibold">{club.coordinator}</strong>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Enrolling
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enrollment Note Banner */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#008744]">
                Student Participation
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Interested in joining a club or student wing?
              </h4>
              <p className="text-xs text-slate-600 max-w-2xl">
                Club enrolments open at the beginning of each academic term in June. Contact respective staff coordinators or class teachers to submit enrollment forms.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008744] text-white text-xs font-bold hover:bg-[#007038] shadow-sm transition-colors shrink-0"
            >
              <span>Contact Coordinators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
