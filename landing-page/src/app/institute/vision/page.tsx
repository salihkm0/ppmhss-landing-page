import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Compass, CheckCircle2, ShieldCheck, Award, Users, Trophy, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision, Mission & Values | PPM HSS Kottukkara",
  description:
    "Our vision, mission, and core values guiding students toward academic distinction and moral uprightness.",
};

export default function VisionPage() {
  const coreValues = [
    {
      title: "Academic Excellence",
      desc: "Strong conceptual learning, regular evaluations, and board examination preparation.",
      icon: Award,
    },
    {
      title: "Moral Integrity",
      desc: "Instilling honesty, empathy, and ethical conduct in all spheres of student life.",
      icon: ShieldCheck,
    },
    {
      title: "Inclusive Access",
      desc: "Accessible, quality education for students from all sections of society.",
      icon: Users,
    },
    {
      title: "Social Commitment",
      desc: "Active participation in community service through NSS, NCC, and student clubs.",
      icon: Trophy,
    },
  ];

  return (
    <div>
      <PageBanner
        eyebrow="OUR PHILOSOPHY"
        title="Vision, Mission &"
        highlightWord="Values"
        description="The educational principles that guide our academic community."
        breadcrumbLabel="Vision & Mission"
        backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
        stats={[
          { label: "Established", value: "1976" },
          { label: "Students", value: "5,100+" },
          { label: "Pass Rate", value: "99.4%" },
        ]}
      />

      <div className="py-14 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Our Vision
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">
                    Vision Statement
                  </h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed italic border-l-4 border-[#008744] pl-4">
                  &ldquo;To provide quality education par excellence for everyone and to hold high standards of education for the community.&rdquo;
                </p>
              </div>
              <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
                Adopted by Nediyiruppu Muslim Educational Association
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                    Our Commitment
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-1">
                    Mission Statement
                  </h2>
                </div>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                    <span>Promote value-based education and help students realize their academic potential.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                    <span>Maintain an inclusive, supportive educational environment for all learners.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                    <span>Nurture ethical character, discipline, and civic responsibility in young minds.</span>
                  </li>
                </ul>
              </div>
              <div className="text-xs text-slate-500 pt-4 border-t border-slate-200">
                PPM HSS Academic Council
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Foundational Principles
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover:border-emerald-300 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subpage Navigation Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/institute"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#008744] transition-colors"
            >
              <span>← About The Institute</span>
            </Link>
            <Link
              href="/institute/leadership"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#008744] hover:underline"
            >
              <span>Administrative Leadership →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

