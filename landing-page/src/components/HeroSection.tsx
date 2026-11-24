"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Camera,
} from "lucide-react";

const DEFAULT_SLIDES = [
  {
    badge: "ESTD 1976",
    titlePart1: "Inspiring & Bright",
    titleHighlight: "Academic Excellence",
    titlePart2: "at PPM HSS",
    desc: "Government-aided school nurturing over 5,100 students across 4.5 acres in Malappuram.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=85&w=1920&auto=format&fit=crop",
    caption: "Main Academic Block • 4.5-Acre Campus",
    tag: "Campus & Grounds",
  },
  {
    badge: "INFRASTRUCTURE",
    titlePart1: "Modern High-Tech",
    titleHighlight: "Laboratories & Science",
    titlePart2: "Wing",
    desc: "Fully equipped physics, chemistry, biology, and advanced research facilities.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1920&auto=format&fit=crop",
    caption: "Science & Research Laboratories",
    tag: "Research & Science",
  },
  {
    badge: "HIGHER SECONDARY",
    titlePart1: "Empowering",
    titleHighlight: "Classrooms & Learning",
    titlePart2: "Spaces",
    desc: "KITE ICT smart classrooms with dedicated faculty and 194 Full A+ in SSLC 2024.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=85&w=1920&auto=format&fit=crop",
    caption: "KITE ICT Smart Classrooms",
    tag: "Smart Classrooms",
  },
  {
    badge: "CAMPUS LIBRARY",
    titlePart1: "Central Reference",
    titleHighlight: "Library & Reading",
    titlePart2: "Pavilion",
    desc: "Comprehensive knowledge hub with over 15,000 volumes, periodicals, and study halls.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=85&w=1920&auto=format&fit=crop",
    caption: "15,000+ Volume Central Library",
    tag: "Resource Hub",
  },
];

export default function HeroSection() {
  const [slides, setSlides] = useState(DEFAULT_SLIDES);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.homePageData?.heroSlides?.length > 0) {
          setSlides(data.data.homePageData.heroSlides);
        }
      })
      .catch(() => {});
  }, []);

  const slide = slides[currentSlide] || DEFAULT_SLIDES[0];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slide every 5.5 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  return (
    <div className="relative bg-slate-950 overflow-hidden">
      {/* ========================================================
          1. CLEAN, MINIMAL HERO SLIDER (SCHOOL IMAGES FULLY VISIBLE)
      ======================================================== */}
      <section
        className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-8 pb-28 sm:pb-32 lg:pb-36"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-Width Background Images with Smooth Cross-Fade */}
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              currentSlide === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{
              backgroundImage: `url(${s.image})`,
            }}
          />
        ))}

        {/* Minimal Soft Gradient: Only adds subtle dark tint behind the left text,
            leaving the center and entire right 70%+ of the photo completely clear & bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Minimal Floating Photo Badge (Top Right) */}
        <div className="absolute top-6 right-4 sm:right-8 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/50 hover:bg-slate-950/75 text-white border border-white/20 backdrop-blur-md text-[11px] font-medium transition-all shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <Camera className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline font-semibold">{slide.caption}</span>
          <span className="sm:hidden font-semibold">{slide.tag || "Campus Photo"}</span>
        </div>

        {/* Main Hero Container - Compact, Clean, Left-Aligned Minimal Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="max-w-xl space-y-4 text-white">
            {/* Minimal Eyebrow Tag */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 text-emerald-300 text-[11px] font-bold tracking-wider uppercase border border-emerald-400/30 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>{slide.badge}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/80 font-normal">Govt-Aided School</span>
              </div>
            </div>

            {/* Reduced, Elegant Typography */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {slide.titlePart1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300">
                {slide.titleHighlight}
              </span>{" "}
              {slide.titlePart2}
            </h1>

            {/* Concise One-Line Subtitle */}
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] line-clamp-2">
              {slide.desc}
            </p>

            {/* Compact CTA Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-emerald-400/30 cursor-pointer"
              >
                <span>Admissions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white border border-white/25 hover:border-emerald-400 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Academics</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Side Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#008744] text-white border border-white/20 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-slate-950/40 hover:bg-[#008744] text-white border border-white/20 hover:border-emerald-400 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Minimal Bottom Slide Indicators + Slide Counter */}
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-30 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 text-white shadow-lg">
          <span className="font-mono text-[11px] font-bold text-emerald-400">
            0{currentSlide + 1}
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx
                    ? "w-5 bg-emerald-400 shadow-xs"
                    : "w-1.5 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            / 0{slides.length}
          </span>
        </div>

        {/* Bottom Emerald Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#008744] via-emerald-400 to-teal-300 z-20" />
      </section>

      {/* ========================================================
          2. 4 FLOATING ASYMMETRIC GLASS CARDS (EDUKA STYLE OVERLAP)
      ======================================================== */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 -mt-14 sm:-mt-16 lg:-mt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 01: Scholarship Facility */}
          <div className="bg-white/90 backdrop-blur-xl rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl hover:bg-white/98 border border-white/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              01
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs group-hover:scale-105">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Scholarship Facility
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  NMMS, USS, Post-Matric Minority, and PPM Merit Awards.
                </p>
              </div>
            </div>
            <Link
              href="/academics"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Card 02: Skilled Lecturers */}
          <div className="bg-white/90 backdrop-blur-xl rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl hover:bg-white/98 border border-white/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              02
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs group-hover:scale-105">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Skilled Lecturers
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  165+ experienced post-graduate teachers across HS and HSE wings.
                </p>
              </div>
            </div>
            <Link
              href="/teachers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Meet Faculty</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Card 03: Book Library Facility */}
          <div className="bg-white/90 backdrop-blur-xl rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl hover:bg-white/98 border border-white/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              03
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs group-hover:scale-105">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Reference Library
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  15,000+ books, periodicals, and quiet reading spaces.
                </p>
              </div>
            </div>
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Explore Library</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Card 04: Aided Education */}
          <div className="bg-white/90 backdrop-blur-xl rounded-tl-[36px] rounded-br-[36px] rounded-tr-2xl rounded-bl-2xl p-7 shadow-xl hover:shadow-2xl hover:bg-white/98 border border-white/80 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border-2 border-emerald-100 group-hover:border-emerald-300/60 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />
            <span className="absolute top-4 right-5 text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors font-mono pointer-events-none">
              04
            </span>
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs group-hover:scale-105">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Government-Aided
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Government-aided fee structure under the Kerala General Education Dept.
                </p>
              </div>
            </div>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] group-hover:text-slate-900 mt-5 pt-3 border-t border-slate-100 uppercase tracking-wider transition-colors"
            >
              <span>Admission Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
