import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { SCHOLARSHIPS_LIST } from "@/data/schoolData";
import { Award, CheckCircle2, Calendar, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarships & Financial Aid | PPM HSS Kottukkara",
  description:
    "Explore government scholarships, merit endowments, and financial aid available for PPM HSS students.",
};

export default function ScholarshipsPage() {
  return (
    <div>
      <PageBanner
        eyebrow="STUDENT FINANCIAL AID"
        title="Scholarships &"
        highlightWord="Merit Awards"
        description="Government endowments and merit awards supporting deserving students."
        breadcrumbLabel="Scholarships"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "State Aid", value: "100% Free Tuition" },
          { label: "NMMS / USS", value: "Available" },
          { label: "Minority Aid", value: "Available" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Financial Assistance & Merit Endowments
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Available Scholarships
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Students at PPM HSS can access both central and state government scholarships, as well as alumni-funded merit awards.
            </p>
          </div>

          {/* Scholarships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCHOLARSHIPS_LIST.map((sch, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-4 hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {sch.target}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Deadline: {sch.deadline}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {sch.name}
                  </h3>

                  <div className="p-3 rounded-2xl bg-white border border-slate-200 space-y-1">
                    <div className="text-[11px] font-bold text-[#008744] uppercase tracking-wider">
                      Scholarship Value
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      {sch.amount}
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1 pt-1">
                    <div>
                      <strong className="text-slate-800">Eligibility:</strong> {sch.eligibility}
                    </div>
                    <div>
                      <strong className="text-slate-800">Provider:</strong> {sch.provider}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500">
                  Applications coordinated via the School Office Helpdesk.
                </div>
              </div>
            ))}
          </div>

          {/* Helpdesk Notice */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                Need Help with Scholarship Registration?
              </h3>
              <p className="text-xs text-slate-600">
                The school IT lab provides free online application support for National Scholarship Portal (NSP) and state scholarship submissions.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md"
            >
              Contact Office Desk
            </Link>
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
              href="/teachers"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>Meet Teachers & Faculty →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

