import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { SCHOLARSHIPS_LIST } from "@/data/schoolData";
import { Award, CheckCircle2, Calendar, FileText, ArrowRight, ShieldCheck } from "lucide-react";

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
        description="Government endowments and merit awards supporting deserving students across High School and Higher Secondary."
        breadcrumbLabel="Scholarships"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "State Aid", value: "100% Free Tuition" },
          { label: "NMMS / USS", value: "Available" },
          { label: "Minority Aid", value: "Available" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          {/* Header */}
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              Financial Assistance & Merit Endowments
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Available Scholarships & Schemes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Students at PPM HSS can access both central and state government scholarships, as well as alumni-funded merit awards and fee waivers.
            </p>
          </div>

          {/* Scholarships Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SCHOLARSHIPS_LIST.map((sch, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={sch.imageUrl}
                    alt={sch.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                  {/* Floating Target Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                      {sch.target}
                    </span>
                  </div>

                  {/* Deadline Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block text-[11px] font-mono font-bold text-slate-900 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                      {sch.deadline}
                    </span>
                  </div>

                  {/* Provider on Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-[11px] text-white/90 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="truncate max-w-xs">{sch.provider}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#008744] transition-colors leading-snug">
                      {sch.name}
                    </h3>

                    {/* Scholarship Value Callout */}
                    <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 space-y-1">
                      <div className="text-[10px] font-bold text-[#008744] uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#008744]" />
                        <span>Scholarship Value & Benefit</span>
                      </div>
                      <div className="text-sm font-black text-emerald-950">
                        {sch.amount}
                      </div>
                    </div>

                    <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                      <div>
                        <strong className="text-slate-800">Eligibility:</strong> {sch.eligibility}
                      </div>
                      <div>
                        <strong className="text-slate-800">Coordination:</strong> PPM HSS IT & Scholarship Desk
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Assisted by School Office</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Active Scheme
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Helpdesk Notice */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#008744]">
                IT Lab Support
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Need Help with Scholarship Registration?
              </h3>
              <p className="text-xs text-slate-600 max-w-2xl">
                The school IT lab provides free online application support, scanning, and document uploading for National Scholarship Portal (NSP) and state scholarship submissions.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs shrink-0 transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Contact Office Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
