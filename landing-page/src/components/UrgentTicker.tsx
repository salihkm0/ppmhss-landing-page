"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertCircle, Pause, Play } from "lucide-react";
import { NOTICES_LIST } from "@/data/schoolData";

export default function UrgentTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const urgentNotices = NOTICES_LIST.filter((n) => n.isUrgent);

  return (
    <div className="w-full overflow-hidden bg-emerald-50/80 backdrop-blur-md border-y border-emerald-200/70 text-emerald-950 text-xs py-2 shadow-2xs">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-hidden">
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-white bg-[#008744] px-2.5 py-0.5 rounded-full shrink-0 shadow-sm border border-emerald-400/30">
          <AlertCircle className="w-3.5 h-3.5 text-white" />
          <span>Notice</span>
        </div>

        <div
          className="flex-1 overflow-hidden relative cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`whitespace-nowrap transition-transform duration-500 flex items-center gap-8 ${
              isPaused ? "" : "animate-[marquee_25s_linear_infinite]"
            }`}
          >
            {urgentNotices.map((notice) => (
              <Link
                key={notice.id}
                href="/news-events"
                className="inline-flex items-center gap-2 hover:underline text-slate-800 font-semibold"
              >
                <span>{notice.title}</span>
                <span className="text-emerald-700 font-mono text-[10px]">({notice.date})</span>
                <span className="text-slate-400">•</span>
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-emerald-800 hover:text-emerald-950 p-1 rounded-full hover:bg-emerald-100/80 backdrop-blur-xs transition-colors cursor-pointer"
          title={isPaused ? "Resume scroll" : "Pause scroll"}
          aria-label={isPaused ? "Resume scroll" : "Pause scroll"}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
