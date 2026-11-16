import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ADMINISTRATION } from "@/data/schoolData";
import { Users, CheckCircle2, Calendar, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Parent-Teacher Association (PTA) | PPM HSS Kottukkara",
  description:
    "Learn about the Parent-Teacher Association at PPM HSS Kottukkara — executive committee, activities, and meeting schedules.",
};

export default function PTAPage() {
  const pta = ADMINISTRATION.pta;

  const committeeMembers = [
    { role: "President", name: pta.president },
    { role: "Vice President", name: pta.vicePresident },
    { role: "General Secretary", name: pta.secretary },
    { role: "Staff Representative", name: pta.treasurer },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="COMMUNITY COLLABORATION"
        title="Parent-Teacher"
        highlightWord="Association (PTA)"
        description="Fostering collaborative partnership between parents, teachers, and administration."
        breadcrumbLabel="PTA"
        backgroundImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Executive Committee", value: "Active" },
          { label: "Class PTAs", value: "Every Term" },
          { label: "Welfare Endowments", value: "Annual" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                About The Association
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Supporting Student Welfare & Academic Progress
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pta.overview}
              </p>

              {/* Key Initiatives */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Key Initiatives & Activities
                </h3>
                <div className="space-y-2.5">
                  {pta.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Executive Committee & Schedule */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-[#008744] border-b border-slate-200 pb-2">
                  Executive Committee
                </h3>
                <div className="space-y-3">
                  {committeeMembers.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {m.role}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">
                        {m.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#008744]">
                  <Calendar className="w-4 h-4" />
                  <span>Meeting Schedule</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {pta.meetingSchedule}
                </p>
                <div className="pt-2 text-xs text-slate-500">
                  Contact: <span className="font-semibold text-slate-800">{pta.contactEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subpage Navigation Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/institute/leadership"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008744] transition-colors"
            >
              <span>← Administrative Leadership</span>
            </Link>
            <Link
              href="/institute"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>About The Institute Overview →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

