import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { ADMINISTRATION } from "@/data/schoolData";
import { Users, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Administrative Leadership | PPM HSS Kottukkara",
  description:
    "Meet the administrative leaders guiding PPM HSS Kottukkara — Manager, Secretary, Principal, and Headmaster.",
};

export default function LeadershipPage() {
  const leaders = [
    {
      ...ADMINISTRATION.manager,
      category: "Management",
    },
    {
      ...ADMINISTRATION.secretary,
      category: "Management",
    },
    {
      ...ADMINISTRATION.principal,
      category: "Higher Secondary Wing",
    },
    {
      ...ADMINISTRATION.headmaster,
      category: "High School Wing",
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="GOVERNANCE & LEADERSHIP"
        title="Administrative"
        highlightWord="Leadership"
        description="The executive trustees and administrators steering academic and institutional growth."
        breadcrumbLabel="Leadership"
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Management", value: "Nediyiruppu MEA" },
          { label: "Faculty & Staff", value: "165+" },
          { label: "Students", value: "5,100+" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Intro */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Executive Directorate
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              School Leadership & Administration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Responsible for strategic governance, academic compliance under Kerala General Education Department, and student welfare.
            </p>
          </div>

          {/* Leaders Grid (Clean 4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((ldr, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-5 flex flex-col justify-between hover:border-emerald-300 transition-all shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={ldr.photo}
                      alt={ldr.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-white shadow-md shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {ldr.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {ldr.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700">
                        {ldr.title}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {ldr.qualification}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                    {ldr.message}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500">
                  <strong className="text-slate-700">Responsibility:</strong> {ldr.role}
                </div>
              </div>
            ))}
          </div>

          {/* Subpage Navigation Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/institute/vision"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008744] transition-colors"
            >
              <span>← Vision, Mission & Values</span>
            </Link>
            <Link
              href="/institute/pta"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>Parent-Teacher Association (PTA) →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

