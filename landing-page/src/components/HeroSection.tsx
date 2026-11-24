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
  CheckCircle2,
  Calendar,
  Compass,
  Camera,
} from "lucide-react";

const DEFAULT_SLIDES = [
  {
    badge: "ESTD 1976",
    titlePart1: "Start Your",
    titleHighlight: "Inspiring & Bright",
    titlePart2: "Academic Future",
    desc: "Government-aided school nurturing over 5,100 students across 4.5 acres in Malappuram district.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=85&w=1920&auto=format&fit=crop",
    caption: "Main Academic Block • 4.5-Acre Lush Campus",
    tag: "Campus & Infrastructure",
    statValue: "5,100+",
    statLabel: "Enrolled Students",
  },
  {
    badge: "INFRASTRUCTURE",
    titlePart1: "Modern High-Tech",
    titleHighlight: "Laboratories & Smart",
    titlePart2: "Classrooms",
    desc: "Advanced science laboratories, KITE ICT smart classrooms, and state-of-the-art computer labs.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1920&auto=format&fit=crop",
    caption: "Advanced Science & Research Laboratories",
    tag: "Research & Science",
    statValue: "6+",
    statLabel: "Specialized Labs",
  },
  {
    badge: "HIGHER SECONDARY",
    titlePart1: "Empowering",
    titleHighlight: "Science, Commerce &",
    titlePart2: "Humanities Streams",
    desc: "Dedicated teachers, specialized coaching, and an outstanding track record of 194 Full A+ in SSLC 2024.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=85&w=1920&auto=format&fit=crop",
    caption: "KITE ICT Smart Classrooms & High School Wing",
    tag: "DHSE Code: 11024",
    statValue: "194",
    statLabel: "Full A+ in SSLC 2024",
  },
  {
    badge: "CAMPUS LIBRARY",
    titlePart1: "Central Reference",
    titleHighlight: "Library & Digital",
    titlePart2: "Resource Wing",
    desc: "Comprehensive knowledge center with 15,000+ reference volumes, journals, and dedicated reading halls.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=85&w=1920&auto=format&fit=crop",
    caption: "Central Reference Library & Reading Pavilion",
    tag: "Resource Hub",
    statValue: "15,000+",
    statLabel: "Academic Volumes",
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

  // Auto advance slide every 5.5 seconds when not paused by hover
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
          1. FULL-WIDTH VIBRANT SCHOOL IMAGE SLIDER HERO
      ======================================================== */}
      <section
        className="relative min-h-[640px] sm:min-h-[700px] lg:min-h-[740px] flex items-center pt-8 pb-28 sm:pb-32 lg:pb-40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Image Carousel with Smooth Cross-Fade & Natural Clarity */}
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

        {/* Directional Soft Shadow Overlay:
            Only shades the left side for crisp text contrast, leaving the center & right 65% of the school image completely open, vivid & clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent pointer-events-none" />

        {/* Top soft shadow for navbar contrast */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent pointer-events-none" />

        {/* Bottom soft gradient for smooth transition to floating cards */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

        {/* Top-Right Floating Live Photo Caption Badge with Subtle Floating Animation */}
        <div className="absolute top-6 right-4 sm:right-8 z-20 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/65 hover:bg-slate-950/85 text-white border border-white/20 backdrop-blur-md shadow-xl text-xs font-medium transition-all animate-float">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <Camera className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-semibold">{slide.caption}</span>
          <span className="text-slate-400 border-l border-white/20 pl-2 font-mono text-[11px]">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Main Hero Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Bold Hero Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-white">
              {/* Category Eyebrow Badge */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/70 text-emerald-300 text-xs font-bold tracking-wider uppercase border border-emerald-400/40 backdrop-blur-md shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{slide.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-200/90 font-medium">Govt-Aided School</span>
                </div>
              </div>

              {/* Headline with Dual-Color Highlighting and Strong Drop-Shadow for 100% Readability */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] max-w-2xl">
                {slide.titlePart1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-300 underline decoration-emerald-400/50 decoration-4 underline-offset-8">
                  {slide.titleHighlight}
                </span>{" "}
                {slide.titlePart2}
              </h1>

              {/* Narrative Subtitle Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed font-normal max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {slide.desc}
              </p>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-950/60 hover:shadow-emerald-700/50 transition-all transform hover:-translate-y-0.5 border border-emerald-400/30"
                >
                  <span>Explore Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white border border-white/30 hover:border-emerald-400 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all transform hover:-translate-y-0.5 shadow-lg"
                >
                  <span>Academic Streams</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>

              {/* Trust Indicators in Frosted Glass Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-white">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">DHSE Code: 11024</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">194 Full A+ (SSLC &apos;24)</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 shadow-md">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-medium">4.5-Acre Campus</span>
                </div>
              </div>
            </div>

            {/* Right Column: Floating Interactive Campus Photo Showcase & Switcher */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="bg-slate-950/50 hover:bg-slate-950/65 backdrop-blur-xl border border-white/25 hover:border-emerald-400/40 rounded-3xl p-6 text-white shadow-2xl space-y-5 transition-all">
                {/* Card Top Pill */}
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Campus Showcase
                    </span>
                  </div>
                  <span className="font-mono text-xs text-slate-200 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                    Slide 0{currentSlide + 1} of 0{slides.length}
                  </span>
                </div>

                {/* Active Slide Stat Highlight */}
                <div className="space-y-1">
                  <div className="text-3xl font-black text-white font-mono tracking-tight flex items-baseline gap-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                      {slide.statValue}
                    </span>
                    <span className="text-sm font-semibold text-slate-300 font-sans">
                      {slide.statLabel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200/90 leading-relaxed font-medium pt-1">
                    📍 {slide.caption}
                  </p>
                </div>

                {/* Interactive Campus Photo Thumbnails Switcher */}
                <div className="space-y-2.5 border-t border-white/15 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Explore School Facilities
                    </span>
                    <span className="text-[10px] text-emerald-300 font-medium">Click photo to view</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {slides.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`group relative rounded-xl overflow-hidden text-left p-2.5 border transition-all cursor-pointer ${
                          currentSlide === idx
                            ? "bg-emerald-950/70 border-emerald-400 shadow-md ring-1 ring-emerald-400"
                            : "bg-white/5 hover:bg-white/15 border-white/15 hover:border-white/30"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-10 h-10 rounded-lg bg-cover bg-center shrink-0 border border-white/20 shadow-xs"
                            style={{ backgroundImage: `url(${s.image})` }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] font-bold text-white truncate group-hover:text-emerald-300 transition-colors">
                              {s.tag}
                            </div>
                            <div className="text-[10px] text-slate-300 truncate">
                              {s.statValue} {s.statLabel.split(" ")[0]}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side Arrow Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-[#008744] text-white border border-white/25 hover:border-emerald-400 shadow-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md transform hover:scale-105 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/70 hover:bg-[#008744] text-white border border-white/25 hover:border-emerald-400 shadow-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md transform hover:scale-105 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Pagination Progress Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 shadow-xl">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === idx
                  ? "w-8 sm:w-10 bg-gradient-to-r from-[#008744] to-emerald-400 shadow-md"
                  : "w-2.5 sm:w-3 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bottom Emerald Gradient Accent Line */}
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
