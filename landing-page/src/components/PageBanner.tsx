"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Sparkles } from "lucide-react";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  description: string;
  breadcrumbLabel: string;
  backgroundImage?: string;
  stats?: { label: string; value: string }[];
}

export default function PageBanner({
  eyebrow,
  title,
  highlightWord,
  description,
  breadcrumbLabel,
  backgroundImage = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1600&auto=format&fit=crop",
  stats,
}: PageBannerProps) {
  return (
    <div className="relative bg-slate-950 py-16 sm:py-20 lg:py-24 overflow-hidden text-white border-b border-slate-800">
      {/* High-Resolution Background Image with subtle zoom on hover */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* Multi-Layer Cinematic Gradient Overlay for Maximum Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-900/85 to-emerald-950/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/40 pointer-events-none" />

      {/* Subtle Dot Grid Accent Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#008744_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Inner Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Breadcrumb Navigation Pill */}
        <nav className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 mb-1 shadow-sm">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-emerald-400 font-bold">{breadcrumbLabel}</span>
        </nav>

        {/* Eyebrow Pill */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#008744]/30 text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-400/40 backdrop-blur-xs shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{eyebrow}</span>
          </div>
        </div>

        {/* Hero Heading with Dual-Color Highlighting */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-[1.15] drop-shadow-md">
          {title}{" "}
          {highlightWord && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 underline decoration-emerald-400/40 decoration-4 underline-offset-8">
              {highlightWord}
            </span>
          )}
        </h1>

        {/* Hero Narrative Description */}
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-200 max-w-2xl leading-relaxed font-normal drop-shadow-sm">
          {description}
        </p>

        {/* Optional Stats Badges */}
        {stats && stats.length > 0 && (
          <div className="pt-3 flex flex-wrap items-center gap-3">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200 shadow-sm"
              >
                <span className="font-mono font-bold text-emerald-300">
                  {s.value}
                </span>
                <span className="text-slate-300 text-[11px]">• {s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Emerald Gradient Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008744] via-emerald-400 to-teal-300" />
    </div>
  );
}