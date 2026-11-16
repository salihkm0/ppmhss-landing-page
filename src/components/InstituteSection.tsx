"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Compass,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function InstituteSection() {
  const subpages = [
    {
      title: "Vision, Mission & Values",
      desc: "Our guiding philosophy, academic vision, and core institutional values.",
      href: "/institute/vision",
      icon: Compass,
      tag: "Philosophy",
    },
    {
      title: "Administrative Leadership",
      desc: "Meet the Manager, Secretary, Principal, and Headmaster guiding our school.",
      href: "/institute/leadership",
      icon: Users,
      tag: "Governance",
    },
    {
      title: "Parent-Teacher Association",
      desc: "PTA executive committee, student welfare programs, and term-wise meetings.",
      href: "/institute/pta",
      icon: ShieldCheck,
      tag: "Community",
    },
  ];

  return (
    <section id="institute" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-14">
        {/* Visual Hero Collage & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Photos */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="h-80 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                  alt="Students at PPM HSS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="h-44 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=600&auto=format&fit=crop"
                    alt="PPM HSS Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#008744] text-white p-5 rounded-3xl space-y-1 shadow-md">
                  <div className="text-2xl font-black font-mono">1976</div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-200">
                    Founded Year
                  </div>
                  <p className="text-[11px] text-emerald-100">
                    Estd. under Nediyiruppu MEA (Reg. No. S.22/75).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
                Institutional Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                About <span className="text-[#008744]">PPM HSS Kottukkara</span>
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Established in 1976 under the Nediyiruppu Muslim Educational Association, Panakkad Pookkoya Thangal Memorial Higher Secondary School has served the educational needs of Malappuram district for nearly five decades.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Starting with just 3 divisions and 112 students, the institution has grown into a premier campus serving over 5,100 students across High School and Higher Secondary wings, with state-of-the-art laboratories and a 99.4% board exam pass record.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#008744]" />
                  <span>Government-Aided</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Affiliated with Kerala General Education Dept & DHSE (Code: 11024).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#008744]" />
                  <span>4.5-Acre Campus</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Located 2 km from Kondotty town near NH 966 in Kottukkara.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Subpages Navigation Cards */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              More About Us
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Explore Institutional Details
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subpages.map((sp, idx) => {
              const IconComp = sp.icon;
              return (
                <Link
                  key={idx}
                  href={sp.href}
                  className="group bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                        {sp.tag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                      {sp.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sp.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:underline">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Affiliation & Fast Facts Strip */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {SCHOOL_INFO.stats.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                {st.value}
                <span className="text-[#008744]">{st.suffix}</span>
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
