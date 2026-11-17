import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ADMINISTRATION } from "@/data/schoolData";
import { Users, CheckCircle2, Calendar, Mail, ArrowRight, ShieldCheck } from "lucide-react";

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
        description="Fostering collaborative partnership between parents, teachers, and administration for student welfare."
        breadcrumbLabel="PTA"
        backgroundImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Executive Committee", value: "Active" },
          { label: "Class PTAs", value: "Every Term" },
          { label: "Welfare Endowments", value: "Annual" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                  About The Association
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Supporting Student Welfare & Academic Progress
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pta.overview}
                </p>
              </div>

              {/* Photo Banner */}
              <div className="relative h-60 w-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
                  alt="PTA General Body Assembly"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    General Body
                  </span>
                  <p className="text-xs font-semibold text-slate-100">
                    Annual Parent-Teacher General Body conference and term progress evaluations.
                  </p>
                </div>
              </div>

              {/* Key Initiatives */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Key Initiatives & Activities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pta.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700 leading-relaxed">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Executive Committee & Schedule */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-sm">
                <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"
                    alt="PTA Leadership Committee"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                    Executive Body
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-base font-bold">Elected PTA Executive Council</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="divide-y divide-slate-100">
                    {committeeMembers.map((m, i) => (
                      <div key={i} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744]">
                            {m.role}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-slate-900">
                            {m.name}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full border border-slate-100">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-3xl p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#008744]">
                  <Calendar className="w-4 h-4" />
                  <span>Meeting Schedule</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {pta.meetingSchedule}
                </p>
                <div className="pt-2 text-xs text-slate-500 border-t border-emerald-200/60">
                  Helpdesk Contact: <span className="font-semibold text-slate-800">{pta.contactEmail}</span>
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
