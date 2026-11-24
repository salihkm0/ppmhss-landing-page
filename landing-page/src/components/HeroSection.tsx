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
        className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center pt-8 pb-28 sm:pb-32 lg:pb-36 no-scroll-reveal"
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

        {/* Animated Mouse Scroll Down Indicator */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-1.5 cursor-pointer opacity-85 hover:opacity-100 transition-opacity"
          onClick={() => {
            window.scrollTo({
              top: 560,
              behavior: "smooth",
            });
          }}
          title="Scroll down to explore"
        >
          <span className="text-[10px] tracking-widest uppercase font-bold text-slate-300 drop-shadow">
            Scroll Down
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1 backdrop-blur-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-[scrollMouse_1.5s_infinite]" />
          </div>
        </div>

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
          2. 4 EXECUTIVE QUICK-ACCESS CARDS (CLEAN & MINIMALIST)
      ======================================================== */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-8 -mt-10 sm:-mt-12 lg:-mt-14 pb-12 sm:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 01: Scholarship Facility */}
          <Link
            href="/academics/scholarships"
            className="scroll-reveal delay-100 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-emerald-500 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs group-hover:scale-105">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Scholarships & Aid
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  NMMS, USS, Post-Matric Minority & merit endowment awards.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008744] group-hover:text-slate-900 pt-3 mt-3 border-t border-slate-100 transition-colors uppercase tracking-wider">
              <span>Learn More</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 02: Skilled Lecturers */}
          <Link
            href="/teachers"
            className="scroll-reveal delay-200 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-emerald-500 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs group-hover:scale-105">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Dedicated Faculty
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  165+ accredited post-graduate educators across HS & HSE.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008744] group-hover:text-slate-900 pt-3 mt-3 border-t border-slate-100 transition-colors uppercase tracking-wider">
              <span>Meet Faculty</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 03: Book Library Facility */}
          <Link
            href="/campus-life"
            className="scroll-reveal delay-300 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-emerald-500 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs group-hover:scale-105">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Reference Library
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  15,000+ volumes, academic journals & quiet study halls.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008744] group-hover:text-slate-900 pt-3 mt-3 border-t border-slate-100 transition-colors uppercase tracking-wider">
              <span>Campus Facilities</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 04: Aided Education */}
          <Link
            href="/admissions"
            className="scroll-reveal delay-400 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-emerald-500 border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#008744] group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs group-hover:scale-105">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008744] transition-colors">
                  Government-Aided
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Subsidized education under Kerala General Education Dept.
                </p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#008744] group-hover:text-slate-900 pt-3 mt-3 border-t border-slate-100 transition-colors uppercase tracking-wider">
              <span>Admission Info</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
