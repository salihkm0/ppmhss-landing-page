"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  Trophy,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";

export default function CampusLifeSection() {
  const facilities = [
    {
      title: "Science Laboratories",
      desc: "Fully equipped Physics, Chemistry, and Biology practical workstations for secondary and higher secondary experiments.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
      tag: "Science & Research",
    },
    {
      title: "Computer Science & IT Labs",
      desc: "Networked Linux terminals with broadband internet supporting Python coding, digital literacy, and IT practicals.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      tag: "Technology",
    },
    {
      title: "Central Scholastic Library",
      desc: "Over 15,000 academic titles, periodicals, and a silent study room fostering deep reading habits.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
      tag: "Library",
    },
    {
      title: "KITE Smart Classrooms",
      desc: "Classrooms equipped with interactive whiteboards and multimedia projectors for modern pedagogical learning.",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      tag: "Classrooms",
    },
    {
      title: "Main Campus Auditorium",
      desc: "Venue for school assemblies, cultural youth festivals, academic seminars, and career conventions.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
      tag: "Auditorium",
    },
    {
      title: "Athletics Grounds & Courts",
      desc: "Spacious outdoor grounds for football, track events, and badminton fostering physical fitness and sportsmanship.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      tag: "Sports",
    },
  ];

  const subpages = [
    {
      title: "Clubs & Activities",
      desc: "NSS, NCC, Bharat Scouts & Guides, Eco Club, STEM Club, and Literary forums.",
      href: "/campus-life/clubs",
      icon: Users,
      tag: "Activities",
    },
    {
      title: "Hall of Achievements",
      desc: "SSLC 100% pass, 194 Full A+, State 1st Rank Commerce, and Kalolsavam honors.",
      href: "/campus-life/achievements",
      icon: Trophy,
      tag: "Honors",
    },
    {
      title: "Photo & Media Gallery",
      desc: "High-resolution photos across science labs, sports meets, and cultural festivals.",
      href: "/gallery",
      icon: ImageIcon,
      tag: "Gallery",
    },
  ];

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Intro */}
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Infrastructure</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Campus Facilities & <span className="text-[#008744]">Environment</span>
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our 4.5-acre green campus in Kottukkara provides modern facilities that support academic inquiry, physical health, and community life.
          </p>
        </div>

        {/* Facilities Grid (Clean 6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#008744] px-2.5 py-0.5 rounded-full shadow-2xs">
                    {fac.tag}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subpages Navigation Section */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008744]">
              More Campus Life
            </span>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Clubs, Achievements & Visual Media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subpages.map((sub, idx) => {
              const IconComp = sub.icon;
              return (
                <Link
                  key={idx}
                  href={sub.href}
                  className="group bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors flex items-center justify-center font-bold">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                        {sub.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                      {sub.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:underline">
                    <span>Explore Section</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
