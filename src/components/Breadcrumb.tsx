import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  currentPage: string;
  parentPage?: { name: string; href: string };
}

export default function Breadcrumb({ currentPage, parentPage }: BreadcrumbProps) {
  return (
    <nav className="bg-slate-50 border-b border-slate-200/80 py-2.5 px-4 sm:px-8 text-xs">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500 font-medium">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
        >
          <Home className="w-3.5 h-3.5 text-slate-400" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        {parentPage && (
          <>
            <Link
              href={parentPage.href}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              {parentPage.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </>
        )}
        <span className="text-[#008744] font-bold">{currentPage}</span>
      </div>
    </nav>
  );
}
