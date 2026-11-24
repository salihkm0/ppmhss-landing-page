"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bell, Pause, Play, ChevronRight } from "lucide-react";
import { NOTICES_LIST } from "@/data/schoolData";

export default function UrgentTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const urgentNotices = NOTICES_LIST.filter((n) => n.isUrgent);

  return (
    <div className="w-full overflow-hidden bg-[#0e1626] text-slate-200 text-xs py-2 border-b border-slate-800/90 shadow-xs relative z-30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-hidden">
        {/* Flash Announcement Pill */}
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-white bg-[#008744] px-2.5 py-0.5 rounded-full shrink-0 shadow-sm border border-emerald-400/30">
          <Bell className="w-3 h-3 text-white shrink-0 animate-pulse" />
          <span>Flash Notice</span>
        </div>

        {/* Marquee Scroller */}
        <div
          className="flex-1 overflow-hidden relative cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`whitespace-nowrap transition-transform duration-500 flex items-center gap-10 ${
              isPaused ? "" : "animate-[marquee_28s_linear_infinite]"
            }`}
          >
            {urgentNotices.map((notice) => (
              <Link
                key={notice.id}
                href="/news-events"
                className="inline-flex items-center gap-2 hover:text-emerald-300 text-slate-200 font-medium transition-colors"
              >
                <span>{notice.title}</span>
                <span className="text-emerald-400 font-mono text-[11px] bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.2 rounded-full">
                  {notice.date}
                </span>
                <span className="text-slate-600">•</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Action / Pause Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/news-events"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
          >
            <span>All Circulars</span>
            <ChevronRight className="w-3 h-3" />
          </Link>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            title={isPaused ? "Resume scroll" : "Pause scroll"}
            aria-label={isPaused ? "Resume scroll" : "Pause scroll"}
          >
            {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
          </button>
        </div>
      </div>
    </div>
  );
}
