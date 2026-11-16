import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  highlightWord?: string;
  description: string;
  breadcrumbLabel: string;
}

export default function PageBanner({
  eyebrow,
  title,
  highlightWord,
  description,
  breadcrumbLabel,
}: PageBannerProps) {
  return (
    <div className="relative bg-slate-50 border-b border-slate-200 py-12 sm:py-14 overflow-hidden">
      {/* Decorative Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-slate-200/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-500 hover:text-[#008744] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#008744] font-semibold">{breadcrumbLabel}</span>
        </nav>

        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#008744] text-xs font-bold tracking-wider uppercase mb-2.5 border border-emerald-200/80">
          <span>{eyebrow}</span>
        </div>

        {/* Dual-Color Page Title */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 max-w-3xl leading-tight">
          {title}{" "}
          {highlightWord && (
            <span className="text-[#008744]">{highlightWord}</span>
          )}
        </h1>

        {/* Page Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Emerald Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008744] via-emerald-400 to-[#007038]" />
    </div>
  );
}
