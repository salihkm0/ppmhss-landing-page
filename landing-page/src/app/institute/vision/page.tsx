import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { Compass, CheckCircle2, ShieldCheck, Award, Users, Trophy, ArrowRight, Quote } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
      tag: "Academics",
    },
    {
      title: "Moral Integrity",
      desc: "Instilling honesty, empathy, and ethical conduct in all spheres of student life.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
      tag: "Character",
    },
    {
      title: "Inclusive Access",
      desc: "Accessible, quality education for students from all sections of society without disparity.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
      tag: "Equity",
    },
    {
      title: "Social Commitment",
      desc: "Active participation in community service through NSS, NCC, and environmental clubs.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
      tag: "Service",
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

      <div className="py-14 sm:py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
          {/* Vision & Mission Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                  alt="Our Vision"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                  Our Guiding Vision
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <Compass className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h2 className="text-xl font-black drop-shadow-sm">Vision Statement</h2>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="relative p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <Quote className="w-8 h-8 text-emerald-200 absolute -top-3 -left-2 rotate-180" />
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed italic relative z-10 pl-2">
                    &ldquo;To provide quality education par excellence for everyone and to hold high standards of education for the community.&rdquo;
                  </p>
                </div>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span>Adopted by Nediyiruppu MEA</span>
                  <span className="font-bold text-[#008744]">Estd. 1976</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="Our Mission"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-400/20 shadow-sm">
                  Our Institutional Commitment
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0" />
                  <h2 className="text-xl font-black drop-shadow-sm">Mission Statement</h2>
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <ul className="text-xs sm:text-sm text-slate-700 space-y-3">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                    <span>Promote value-based education and help students realize their full academic potential.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                    <span>Maintain an inclusive, highly supportive educational environment for all learners.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                    <span>Nurture ethical character, discipline, and active civic responsibility in young minds.</span>
                  </li>
                </ul>
                <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span>PPM HSS Academic Council</span>
                  <span className="font-bold text-[#008744]">Active Protocol</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values with Images */}
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
                    className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                      <img
                        src={val.image}
                        alt={val.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-slate-900/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-400/20 shadow-sm">
                        {val.tag}
                      </span>
                      <div className="absolute bottom-2.5 left-3 text-white flex items-center gap-1.5">
                        <IconComp className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-bold truncate">{val.title}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.desc}
                      </p>
                      <div className="pt-2 border-t border-slate-100 text-[11px] font-bold text-[#008744]">
                        Core Pillar
                      </div>
                    </div>
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
